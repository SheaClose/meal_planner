import auth0 from 'auth0-js';
import axios from 'axios';
import store from '../store';
import { handleLogin } from '../ducks/reducer';
import config from '../authConfig';
const { dispatch } = store;
console.log(config);
class Auth {
  auth0 = new auth0.WebAuth(config);

  login() {
    this.auth0.authorize();
  }
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication(props) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        props.history.replace('/');
      } else if (err) {
        props.history.replace('/');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    axios
      .post('/api/login', authResult)
      .then(user => {
        dispatch(handleLogin(true));
      })
      .catch(err => {
        console.log(err);
        dispatch(handleLogin(false));
      });
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    // history.replace('/home');
  }

  isAuthenticated() {
    axios
      .get('/api/isLoggedIn')
      .then(user => dispatch(handleLogin(true)))
      .catch(err => dispatch(handleLogin(false)));
  }
}

export default Auth;

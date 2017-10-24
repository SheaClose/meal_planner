import React, { Component } from 'react';
import NavComponent from './Components/Nav/NavComponent';
import router from './router';
import Auth from './Auth/Auth';
import './App.css';

const auth = new Auth();

class App extends Component {
  componentDidMount() {
    auth.isAuthenticated();
  }
  render() {
    return (
      <div className="App">
        <NavComponent />
        {router}
      </div>
    );
  }
}

export default App;

const userCtrl = require('./UserCtrl');

module.exports = app => {
  app.get('/api/isLoggedIn', userCtrl.getUser);
  app.post('/api/login', userCtrl.loginUser);
};

const userRoute = require('./features/UserRoute.js');

module.exports = app => {
  userRoute(app);
};

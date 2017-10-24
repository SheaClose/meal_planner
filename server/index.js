const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  port = 3001,
  app = express(),
  config = require('./config'),
  session = require('express-session'),
  massive = require('massive'),
  masterRoutes = require('./masterRoutes');
require('dotenv').config();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
});

app.use(session(config.session));
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../public'));
app.get('/callback', (req, res) => {
  console.log(req.body);
});
masterRoutes(app);

app.listen(port, function() {
  console.log('Server listening on port', port);
});

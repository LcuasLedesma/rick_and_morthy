const express = require('express');
const app = express();
const logger = require('morgan');

const routes = require('./routes/index');

app.use(express.json());

const urlencode = express.urlencoded({extended: false});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('access-control-allow-credentials', 'true');
  next();
});

app.use(logger('dev'));

app.options('*', (req, res) => {
  res.status(200).send();
});


app.use('/rickandmorty', routes);

app.get('/home', (req, res) => { 
  res.status(200).json({message: 'Welcome to the Rick and Morty API'});
});

module.exports = app;
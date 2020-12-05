const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});

// Define que a aplicação vai receber objeto do tipo json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Importação do controller criado passando a váriavel app adiante
require('./app/clients')(app);

// Porta que a aplicação ficará ouvindo
app.listen(3337);

console.log('api starter on port: 3337');

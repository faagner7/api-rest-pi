const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Define que a aplicação vai receber objeto do tipo json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //Utilizado para entender parâmetros via
// Importação do controller criado passando a váriavel app adiante
require('./app/controller/products')(app);

// Porta que a aplicação ficará ouvindo
app.listen(3337);

console.log('api starter on port: 3337');

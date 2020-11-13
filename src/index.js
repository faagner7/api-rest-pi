const express = require('express');

const app = express();

// Importação do controller criado passando a váriavel app adiante
require('./app/controller/products')(app);

// Porta que a aplicação ficará ouvindo
app.listen(3337);

console.log('api starter on port: 3337');

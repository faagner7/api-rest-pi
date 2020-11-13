const express = require('express');
const axios = require('axios');

const router = express.Router();

// declarando a url do server json que está simulando um banco de dados;
const api = 'http://localhost:3333/products';

router.get('/', async (err, res, body) => {
  const response = await axios.get(`${api}`);
  res.send({ status: response.status, data: response.data });
});

router.post('/', async (req, res) => {
  const data = req.body;
  const response = await axios
    .post(`${api}`, data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  if (response.status === 201) {
    res.send({
      status: response.status,
      message: 'Cadastrado com sucesso!',
    });
  } else {
    res.send({
      status: response.status,
      message: 'Algo de errado aconteceu.',
    });
  }
});

module.exports = (app) => app.use('/products', router);

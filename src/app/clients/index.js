const express = require('express');
const axios = require('axios');

const api = require('../../helpers/api');
const router = express.Router();

// declarando a url do server json que está simulando um banco de dados;

router.get('/', async (req, res) => {
  const response = await axios.get(`${api}/clients`);
  res.send({ data: response.data, messsage: 'SUCESSO!' });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.get(`${api}/clients/${id}`);
  res.send({ data });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await axios.delete(`${api}/clients/${id}`);
  const data = response.data;
  res.send({ data });
});

router.post('/', async (req, res) => {
  const data = req.body;
  const response = await axios
    .post(`${api}/clients`, data)
    .then(res => {
      return res;
    })
    .catch(error => {
      return error;
    });
  if (response.status === 201) {
    res.send({
      status: response.status,
      message: 'Cadastrado com sucesso!'
    });
  } else {
    res.send({
      status: response.status,
      message: 'Algo de errado aconteceu.'
    });
  }
});

router.put('/:id', async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const response = await axios
    .put(`${api}/clients/${id}`, data)
    .then(res => {
      return res;
    })
    .catch(error => {
      return error;
    });
  if (response.status === 200) {
    res.send({
      status: response.status,
      data: response.data,
      message: 'Atualizado com sucesso!'
    });
  } else {
    res.send({
      status: response.status,
      message: 'Algo de errado aconteceu.'
    });
  }
});

module.exports = app => app.use('/clients', router);

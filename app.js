const express = require('express');
const path = require('path');
const cardsPath = require('./routes/cards');
const usersPath = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

app
  .use(express.static(path.join(__dirname, 'public')))
  .use('/', cardsPath)
  .use('/', usersPath)
  .use('*', (req, res) => {
    res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
  })
  .listen(PORT);

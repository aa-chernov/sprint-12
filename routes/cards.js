/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-console */
const cardsRouter = require('express').Router();
const path = require('path');

const cardsPath = require(path.join(__dirname, '../data/cards.json'));

cardsRouter.get('/cards', (req, res) => {
  res.send(cardsPath);
});

module.exports = cardsRouter;

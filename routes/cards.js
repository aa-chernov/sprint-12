const cardsRouter = require('express').Router();
const fs = require('fs');
const path = require('path');

const cardsPath = path.join(__dirname, '../data/cards.json');

const cards = (cardParse) => {
  fs.readFile(cardsPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err.stack);
      return;
    }
    cardParse(JSON.parse(data));
  });
};
cardsRouter.get('/cards', (req, res) => {
  cards((data) => res.send(data));
});

module.exports = cardsRouter;

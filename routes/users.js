/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-underscore-dangle */

const usersRouter = require('express').Router();
const path = require('path');

const usersPath = require(path.join(__dirname, '../data/users.json'));

usersRouter.get('/users', (req, res) => {
  res.send(usersPath);
});

usersRouter.get('/users/:_id', (req, res) => {
  const userItem = usersPath.find((item) => item._id === req.params._id);
  if (userItem) {
    res.send(userItem);
    return;
  }
  res.status(404).send({ message: 'Нет пользователя с таким id' });
});

module.exports = usersRouter;

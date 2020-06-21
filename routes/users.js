const usersRouter = require('express').Router();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');

const users = (usersParse) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    const usersdb = JSON.parse(data);
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err.stack);
      return;
    }
    usersParse(usersdb);
  });
};

usersRouter.get('/users', (req, res) => {
  users((data) => res.send(data));
});

usersRouter.get('/users/:id', (req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    const usersdb = JSON.parse(data);
    const item = (element) => {
      if (element._id === req.params.id) {
        return element;
      }
    };
    if (usersdb.find(item) !== undefined) {
      res.send(usersdb.find(item));
    } else res.status(404).send({ message: 'Нет пользователя с таким id' });
  });
});

usersRouter.get('/users/:id', (req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    const usersdb = JSON.parse(data);
    const item = (element) => {
      if (element._id !== req.params.id) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
    };
    usersdb.find(item);
  });
});

module.exports = usersRouter;

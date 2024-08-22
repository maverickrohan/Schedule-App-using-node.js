const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', (req, res) => {
  db.collection('todos').find().toArray((err, todos) => {
    res.render('index', { todos });
  });
});

router.post('/create', (req, res) => {
  const todo = { text: req.body.text, completed: false };
  db.collection('todos').insertOne(todo, (err, result) => {
    res.redirect('/');
  });
});

router.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const todo = { text: req.body.text, completed: req.body.completed };
  db.collection('todos').updateOne({ _id: id }, { $set: todo }, (err, result) => {
    res.redirect('/');
  });
});

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  db.collection('todos').deleteOne({ _id: id }, (err, result) => {
    res.redirect('/');
  });
});

module.exports = router;

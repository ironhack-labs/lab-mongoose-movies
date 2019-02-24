const express = require('express');
const app = express();
const Celebrity = require('../../models/celebrity');

app.get('/celebrities/new', (req, res) => res.render('celebrities/new'));

app.post('/celebrities', (req, res) => {
    let newCelebrity = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchphrase
    }
    Celebrity.create(newCelebrity, err => err ? res.status(500).send() : res.status(200).redirect('back'));
  });

  module.exports = app;
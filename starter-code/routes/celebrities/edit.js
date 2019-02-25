const express = require('express');
const app = express();
const Celebrity = require('../../models/celebrity');

//go to the form to update the celebrity
app.get('/celebrities/:id/edit', (req, res) => {
    Celebrity.findById(req.params.id, (err, celebrities) => err ? res.status(500).send() : res.render('celebrities/edit', {celebrities}))
  });

//edit the celebrity with user input and redirect back to celebrity overview
app.post('/celebrities/:id/edit', (req, res) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, err => err ? res.status(500).send() : res.status(200).redirect('/celebrities'));
});

module.exports = app;


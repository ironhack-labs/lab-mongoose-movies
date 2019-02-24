const express = require('express');
const app = express();
const Celebrity = require('../../models/celebrity');

app.get('/celebrities/:id/edit', (req, res) => {
    Celebrity.findById(req.params.id, (err, celebrities) => err ? res.status(500).send() : res.render('celebrities/edit', {celebrities}))
  });
  
app.post('/celebrities/:id/edit', (req, res) => {
    let newCelebrity = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchphrase
    }
    Celebrity.findByIdAndUpdate(req.params.id, newCelebrity, err => err ? res.status(500).send() : res.status(200).redirect('/celebrities'));
});

module.exports = app;


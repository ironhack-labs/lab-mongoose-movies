const express = require('express');
const app = express();
const Celebrity = require('../../models/celebrity');

app.post('/celebrities/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndDelete(req.params.id, (err) => err ? res.status(500).send('celeb not deleted') : res.send('celeb removed'));
  });

module.exports = app
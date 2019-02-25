const express = require('express');
const app = express();
const Celebrity = require('../../models/celebrity');

app.get('/celebrities/:id', (req, res) => 
Celebrity.findById(req.params.id, (err, celebrities) => err ? res.status(500).send() : res.render('celebrities/show', {celebrities}))
);

module.exports = app;
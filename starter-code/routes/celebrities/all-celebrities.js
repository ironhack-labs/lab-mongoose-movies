const express = require('express');
const app = express();
const Celebrity = require('../../models/celebrity');

app.get('/', (req, res) => 
  Celebrity.find({}, (err, celebrities) => err ? res.send(err) : res.render('celebrities/index.hbs', {celebrities}))
);

module.exports = app
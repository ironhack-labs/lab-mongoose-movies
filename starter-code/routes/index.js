const express = require('express');
const router  = express.Router();

const mongoose     = require('mongoose');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;

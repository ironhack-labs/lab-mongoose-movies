const express = require('express');
const router = express.Router();
const celebritiesSchema = require('../models/celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities/index', (req, res, next) => {
  celebritiesSchema
    .find()
    .then(celebrities => res.render('celebrities/index', { celebrities }))
    .catch(err => console.log('An error ocurred: ', err));
});

module.exports = router;

/*
In the views / celebrities / index.hbs view file:
Add an < h2 > tag for the page's heading.
Use a forEach loop to display tags with each celebrity's name.
In the views / index.hbs(homepage) file:
Add a link that goes to the / celebrities route. */

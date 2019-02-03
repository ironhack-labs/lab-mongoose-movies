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

router.get('/celebrities/:id', (req, res, next) => {
  celebritiesSchema
    .findById(req.params.id, { _id: 0 })
    .then(celebrity => res.render('celebrities/show', { celebrity }))
    .catch(err => console.log('An error ocurred: ', err));
});

module.exports = router;

/*
 */

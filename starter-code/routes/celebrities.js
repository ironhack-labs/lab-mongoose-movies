const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

// GET Celebrities page - Route to access the celebrities index.hbs page and display each celebrity
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrity => {
    res.render('celebrities/index', { celebrity })
  })
  .catch(error => {
    next(error)
  })
});

//GET Celebrities ID
router.get('/:Id', (req, res, next) => {
  let { Id } = req.params;
  Celebrity.findById(Id)
  .then(celebrity => {
    res.render('celebrities/show', celebrity)
  })
  .catch(error => {
    next(error)
  })

})

module.exports = router;


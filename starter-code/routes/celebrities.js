const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity')

router.get('/celebrities/:id', (req, res, next) => {
  Celebrity.findOne().then(celebrityFromDB=>{
    res.render('celebrity', celebrityFromDB)
  })
});

// module.exports = router;

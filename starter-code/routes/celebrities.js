const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find().exec((err, celebrities) => {
    res.render('celebrities/index', { celebrities});
    console.log(celebrities);
  });
});


router.get('/celebrities/:id', (req,res,next) => {
  const CelebrityId = req.params.id;


  Celebrity.findById(CelebrityId, (err, celebrity) => {
    if (err) { return next(err); }
    res.render('celebrities/show', { celebrity });
    console.log(celebrity)

  });
});


module.exports = router;
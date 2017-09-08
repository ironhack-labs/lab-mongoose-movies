const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

// RETRIEVE: Celeb list
router.get('/celebrities', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err)  return next(err);

    res.render('celebrities/celebrity_list', {
      title:'Lista de Celebrities',
      celebrities: celebrities,
    });
  });
});

// RETRIEVE: Celeb info
router.get('/celebrities/:id', (req, res, next) => {

  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
    res.render('celebrities/celebrity_detail',{title: 'Detalle', celebrity: celebrity});
  });
});



module.exports = router;

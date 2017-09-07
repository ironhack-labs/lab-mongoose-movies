const express = require('express');

const router = express.Router();

router.get('/celebrity', (req, res, next) => {
    Celebrity.find({}, (err, celebrities) => {
      if (err) {return next(err); }

      res.render('celebrities/index', {
        title: 'Celebrities',
      });
    });
  });


router.get('/celebrities/:id', (req, res, next) => {

  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
    res.render('products/product_detail',{title: 'Detalle', product: product});
  });
});

module.exports = router;

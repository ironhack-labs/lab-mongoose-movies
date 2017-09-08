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


router.get('/new', (req, res, next) => {
  res.render('celebrities/new',{title:'Add a celebrity'});
});


router.post('/celebrities',(req,res,next) =>{
  const celebritiesInfo = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
  };

const newCelebrity = new Celebrity(celebritiesInfo);
  newCelebrity.save( (err) => {

  if (err) { return next(err); }

    return res.redirect('/celebrities');
  });
});

router.get('/celebrities/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId, (err, celebrity) => {
    if (err){ return next(err); }
    return res.redirect('/celebrities');
  });
});

module.exports = router;

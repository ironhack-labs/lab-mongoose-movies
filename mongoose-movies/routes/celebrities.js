var express = require('express');
var router = express.Router();
const Celebrity = require('../models/celebrity');

// LISTING ALL CELEBRITIES
router.get('/', (req, res, next) => {
  Celebrity.find({}, (error, celebrities)=> {
    if (error) {
      next(error);
    } else {
      console.log(celebrities);
      res.render('celebrities/index', { celebrities });
    }
  })
});

// NEW CELEBRITY page
router.get('/new', (req, res) => {
  res.render('celebrities/new');
})

router.post('/', (req, res) => {
  let celebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchphrase: req.body.catchphrase
  };
  Celebrity.create( celebrity, (err, doc) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/celebrities');
    };
  })
})


// CELEBRITIES DETAIL PAGE
router.get('/:celebrityId', (req, res, next) => {
  let celebrityId = req.params.celebrityId;
  Celebrity.findById(celebrityId, (err, celebrity)=> {
    if (err) {
      next(err);
    } else {
      console.log(celebrity);
      // Product.find returns an array, because it's an array, you have to return to the first position.
      // Since it's an Id, you know it will be unique, so you can pass {product: product[0]}.
      // Product.findById - will reutrn only the object of the single product that matches that ID.
      res.render('celebrities/show', { celebrity: celebrity })
    }
  })
})


// DELETE A CELEBRITY
router.post('/:celebrityId/delete', (req, res, next) => {
  let celebId = req.params.celebrityId;
  Celebrity.findByIdAndRemove(celebId, (err, celebrity)=> {
    if(err) {
      next(err)
    } else {
      res.redirect('/celebrities');
    }
  })
})

// PULL UP EDIT CELEBRITY FORM PAGE
router.get('/:celebrityId/edit', (req, res, next) => {
  let celebId = req.params.celebrityId;
  Celebrity.findById(celebId, (err, celebrity)=>{
    if(err) {
      next(err)
    } else {
      res.render('celebrities/edit', {celebrity: celebrity});
    }
  })
})

// POST EDIT CELEBRITY INFORMATION TO CELEB
router.post('/:celebrityId/update', (req, res, next) => {
  let celebToUpdate = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchphrase: req.body.catchphrase
  }
  Celebrity.findByIdAndUpdate(req.params.celebrityId, celebToUpdate, (err, celebrity) => {
    if (err) {
      next(err)
    } else {
      res.redirect('/celebrities');
    }
  })
});

module.exports = router;

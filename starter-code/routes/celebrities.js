const express = require('express');
const router  = express.Router();
const CelebrityModel = require('./../models/Celebrity.model')

/* GET home page */
router.get('/', async (req, res, next) => {
  try {
    const celebrities = await CelebrityModel.find();
    res.render('celebrities/celebrities', {celebrities});
  } catch(err) {
      next(err)
  }
});

router.get('/new', async (req, res, next) => {
    try {
      res.render('celebrities/celebrity-new')
    } catch(err) {
        next(err)
    }
  });

  router.post('/create', async (req, res, next) => {
     
    try {
      await CelebrityModel.create(req.body)
      res.redirect('/celebrities');
    } catch(err) {
        res.redirect('celebrities/new');
        next(err)
    }
  });

router.get('/:id', async (req, res, next) => {
    try {
      const celebrity = await CelebrityModel.findById(req.params.id);
      res.render('celebrities/celebrity-details', celebrity);
    } catch(err) {
        next(err)
    }
  });




module.exports = router;

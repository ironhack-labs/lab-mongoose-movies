const express = require('express');
const router  = express.Router();
const Celebrities = require('../models/Celebrities');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', async (req, res, next) => {
  const celebrities = await Celebrities.find();
  try {
    res.render('celebrities/index', { celebrities });
  } catch(err) {
    next();
    console.log(err);
  }

});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/celebrities/:id', async (req, res, next) => {
  const { id } = req.params;
  const celebrity = await Celebrities.findById(id);
  try {
    res.render('celebrities/show', celebrity);
  } catch(err) {
    next();
    console.log(err);
  }
});

router.post('/celebrities', (req, res, next) => {
  const newCelebrity = new Celebrities(req.body);
  console.log(newCelebrity);
  newCelebrity.save()
    .then(() => {
      console.log('Celebrity sucessfully registered.');
      res.redirect('/celebrities');
    })
    .catch((err) => {
      res.render('celebrities/new');
      throw new Error(err);
    });
});


module.exports = router;

const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')


/* GET celebrities page */
router.get('/', (req, res, next) => {
  Celebrity.find().then(celebrityData =>
    res.render('celebrities/index', { celebrityData: celebrityData })
  )
    .catch(error => {
      console.log(error)
    })
});

/* POST new celebrity into databse page */
router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase }).then(() => {
    res.redirect('/celebrities')
  })
});


/* GET add celebrity page */
router.get('/new', (req, res, next) => {
  res.render('celebrities/new')
    .catch(error => {
      console.log(error)
    })
});

/* GET single celebrity page */
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id).then(singleCelebrity =>
    res.render('celebrities/show', { singleCelebrity: singleCelebrity })
  )
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;
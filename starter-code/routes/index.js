require('dotenv').config();
const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities',(req, res, next)=>{
  Celebrity.find()
  .then(data => {
    res.render('celebrities',{ data })
    console.log(data)
})
.catch(err => console.log(err))
})

router.get('/celebrities/:celebrityId', (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then(data => {
      res.render('seeMore', { data : data });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});

router.get('/new', (req, res, next) => res.render('new'))

router.post('/new', (req, res, next) => {
  Celebrity.create({ ...req.body })
    .then(data => {
      res.send(data)
      res.redirect('/celebrities')
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('celebrities/delete/:id', (req, res, next) => {
  const { id } = req.params
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router;

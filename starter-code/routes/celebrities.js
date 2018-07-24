var express = require('express');
const Celebrity = require('../models/celebrity')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 Celebrity.find()
 .then((celebrities) => {
   res.render('celebrities/list', {celebrities})
 })
 .catch(error => {
   console.log(error)
 })
});

router.get('/add', (req, res, next) =>{
  res.render('celebrities/add')
});

router.post('/add', (req, res, next) =>{
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
  .then(() =>{
    res.redirect('/celebrities');
  })
  .catch(error =>{
    next(error);
  })
});


router.get('/:id', (req, res, next) =>{
  const {id} = req.params;
  Celebrity.findById(id)
  .then((celebrity) =>{
    res.render('celebrities/index', celebrity);
  })
  .catch((error) =>{
    next(error);
  })
});

router.post('/:id/delete', (req, res, next) =>{
  const {id} = req.params;
  Celebrity.findByIdAndRemove(id)
  .then(data => {
    res.redirect('/celebrities')
  })
  .catch(error =>{
    next(error);
  })
});

router.get('/:id/edit', (req, res, next) =>{
  const {id} = req.params;
  Celebrity.findById(id)
  .then(celebrity => {
    res.render('celebrities/edit', celebrity);
  })
  .catch(error => {
    next(error);
  })
});

router.post('/:id', (req, res, next) => {
  const {id} = req.params;
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(id,  {name, occupation, catchPhrase})
  .then (celebrity => {
    res.redirect(`/celebrities/${id}`);
  })
  .catch(error => {
    next(error);
  })
});



module.exports = router;

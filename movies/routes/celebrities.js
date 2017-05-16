var express = require('express');
var router = express.Router();
const Celebrity = require('../models/celebrity');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Celebrity.find({},(error, celebrities) => {
    if(error){
      next(error);
    }else{
      // console.log(celebrities);
      res.render('celebrities/index', { celebrities } );

    }
  });
});


router.post('/',(req,res)=>{
  let celebrities = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase

  };
  Celebrity.create(celebrities,(err, doc)=>{
    if (err){
      next(err);
    }else{
      res.redirect('/celebrities');
    }
  });
});

router.get('/new',(req,res) =>
{
  res.render('celebrities/new');
});

router.get('/:id', (req, res, next)=> {
  let celebrityId = req.params.id;

  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) {
      next(err);
    } else {
      res.render('celebrities/show', {celebrity : celebrity} );
    }
  });
});

router.get('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id, (err, celebrity)=>{
    if (err) {
      next(err);
    } else {
      res.redirect('/celebrities');
    }
  });
});

router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id, (err, celebrity)=>{
    if (err) {
      next(err);
    }else{
      res.render('celebrities/edit', { celebrity: celebrity });
    }
  });
});

router.post('/:id/update', (req, res, next) => {
  let celebrityToUpdate = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(req.params.id, celebrityToUpdate, (err, celebrity)=>{
    if (err) {
      next(err);
    } else {
      res.redirect('/celebrities');
    }
  });
});


















module.exports = router;

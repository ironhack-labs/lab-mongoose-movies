const express = require('express');
const router  = express.Router();
const celebrityModel = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  celebrityModel.find()
    .then(data => {
      res.render('celebrities/celebrities', {data});
    })
    .catch(err => {
      console.log(err)
    })
  console.log('SUCCESS')
})

router.get('/celebrities/:id', (req, res, next) => {
  let id = req.params.id
  celebrityModel.findById(id)
  .then(data => {
    console.log(data)
    res.render('celebrities/show', {data});
  })
  .catch(err => {
    next()
    console.log(err)
  })
})



router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});



router.post('/celebrities', (req, res) => {
  console.log('hey')
  // What ES6 feature could we use to clean these two lines up?
  let celebInfo = {
     name: req.body.name,
     occupation: req.body.occupation,
     catchPhrase: req.body.catchPhrase
  }
  var newInfo = new celebrityModel(celebInfo);
    newInfo.save(function (err) {
    if (err) {
      res.render('celebrities/new');
    } else {
    celebrityModel.find()
      .then(data => {
        res.render('celebrities/celebrities', {data});
      })
    }
  });
});


router.post('/:id/delete', function (req, res) {
  let id = req.params.id;

  celebrityModel.findByIdAndRemove(id)
    .then(data => {
      celebrityModel.find()
      .then(data => {
        res.render('celebrities/celebrities', {data});
      })
    })
    .catch(err => {
      next()
      return err;
    })
})

router.get('/celebrities/:id/edit', (req, res, next) => {
  let id = req.params.id;
  celebrityModel.findById(id)
    .then(data =>  {
      res.render('celebrities/edit', {data});
      
    })
    .catch(err => {
      next()
      return err;
    })
});

router.post('/editcelebrities/:id', function (req, res) {
  let id = req.params.id;

  console.log("hrtr id the id",id)

  celebrityModel.findById(id, function (err, adventure) {});

  const updatedCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.occupation.catchPhrase
    };
    
    celebrityModel.findOneAndUpdate(
      {id, ...updatedCeleb}
   )
   .then(celebrities =>{
    res.redirect('/celebrities/' +celebrities._id)
  })
})






module.exports = router;










const express = require('express');
const Celebrity = require('../models/celebrity');
const router = express.Router();

router.get('/', (req, res, next) => {
// the '/' actually is '/celebrities'. It refers to the route we set this file celebrities.js to,
// i.e. /celebrities
  Celebrity.find({}, (err, celebrities) => {
    if (err){next (err)
    } else{
      res.render('celebrities/index', {celebrities: celebrities});
      }
  })
}) //router.get('/')

// create new celebrity **********************************
router.get('/new', (req, res, next) =>{
  console.log('tetststestts', req);
  res.render('celebrities/new');
});

// posts the new celebrity data*********************
router.post('/', (req, res, next) => {
  console.log('ogjguytf', req.body.name);
  const celebrityModel = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  }
  const newCelebrity = new Celebrity(celebrityModel)
  newCelebrity.save ( (err) => { //saves new celebrity
    if (err) {
      next(err)
    }
    res.redirect('/celebrities') //refreshes the celebrities page
  })
});


//creating a page for each specific celebrity**********************************
router.get('/:id' , (req, res, next)=>{
  Celebrity.findById(req.params.id, (err, celebrity)=>{ //params is a set var in every req, which
    //contains the object Celebrity's data
    if (err){next (err)
    } else{
      res.render('celebrities/show', {celebrity: celebrity});
    }
  })
})

// delete a celebrity from the celebrity list**********
router.post('/:id/delete', (req, res, next) => {
  console.log(req);
  Celebrity.findByIdAndRemove(req.params.id, (err,celebrity) =>{
    if (err) {
      next(err)
    }
    res.redirect('/celebrities')
  })
})


// edit an existing celebrity page
router.get('/:id/edit', (req, res, next) => {
  console.log('editeditedit', req)
  Celebrity.findById(req.params.id, (err, celebrity)=> { //params is a set var in every req, which
    //contains the object Celebrity's data
    if (err){
      next (err)
    }
      res.render('celebrities/edit', {celebrity: celebrity});
  })
})



router.post('/:id', (req, res, next) =>{
  // console.log('postpostpost', req)
  const celebrityModel = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  }

  Celebrity.findByIdAndUpdate(req.params.id, celebrityModel, {new: true}, (err, newCelebrityModel)=> {
    if (err){next (err)}
    console.log(newCelebrityModel)
      res.redirect('/celebrities')
    })
})

module.exports = router;

var express = require('express');
var router = express.Router();

const Celebrity = require('./../models/Celebrity');

//GET /celebrities
router.get('/', (req, res, next) => {
  Celebrity.find()
  .then( (allCelebritiesFromDB) => { 
      //console.log(allCelebritiesFromDB)
      res.render('celebrities/index', { allCelebritiesFromDB }); 
  })
  .catch( (err) => console.log(err));
});

//GET  /celebrities/new 
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

//POST /celebrities/add 
router.post('/', (req, res, next) => {
  console.log('celebrity added:', req.body);

  const {
    name, occupation, catchPhrase
  } = req.body;

  Celebrity.create({
    name, occupation, catchPhrase
    })
    .then((celebrity) => {
      res.redirect('/celebrities')
    })
    .catch((err) => console.log(err));
    res.render('celebrities/new');
});




// POST /celebrities/:id/delete
router.post('/:id/delete', (req, res, next) => {
  console.log(req.params);
  const celebrityId = req.params.id;

  Celebrity.findByIdAndRemove(celebrityId)
    .then( () => {
      return Celebrity.find();
    })
    .then( (allCelebritiesFromDB) => { 
        res.render('celebrities/index', { allCelebritiesFromDB }); 
    })
    .catch( (err) => {
      console.log(err);
      next();
    });
})








//GET  /celebreties/edit
router.get('/:id/edit', (req, res, next) => {
  console.log(req.query);

  const {
    _id
  } = req.query;

  //GET THE CELEBRITY FROM DB
 Celebrity.findOne({
      _id
    })
    .then((editedCelebrity) => {
      //RENDER THE FORM WITH CELEBRITY DATA
      res.render('celebrities/edit', {
        editedCelebrity
      })
    })
    .catch((err) => console.log(err));
});


//POST /celebrities/edit
router.post('/:id', (req, res, next) => {

  const {
    _id
  } = req.query;
  const {
    name, occupation, catchPhrase
  } = req.body;


  //UPDATE THE CELEBRITY
  Celebrity.updateOne({_id}, {
    name, occupation, catchPhrase
    }, {
      new: true
    })
    .then((updateCelebrity) => {
      //REDIRECT TO THE LIST OF CELEBRITIES
      res.redirect('/celebrities')
    })
    .catch((err) => console.log(err));
});








//GET /celebrities/id
router.get('/:id', (req, res, next) => {
  console.log(req.params);
  const celebrityId = req.params.id;

  Celebrity.findById(celebrityId)
    .then( (celebrityDetails) => {
      console.log('CELEBRITY DETAILS', celebrityDetails);
      
      res.render('celebrities/show', { celebrityDetails });
    })
    .catch( (err) => console.log(err));
});










module.exports = router;
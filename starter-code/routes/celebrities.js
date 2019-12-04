const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');


router.get('/', (req, res, next) => {
  console.log(req.session)
  Celebrity.find()
    .then((allTheCebs) => {
      res.render('celebrities', { allTheCebs });
    })
    .catch((err) => {
      next(err);
    })



});

router.get('/new', (req, res, next) => {
  console.log('in new')
  res.render('new');
})

router.get('/details/:id', (req, res, next) => {
  let id = req.params.id;

  Celebrity.findById(id)
    .then((oneCelebrity) => {
      res.render('celebrities/singleCeleb', { oneCelebrity })
    })
    .catch((err) => {
      next(err);
    })
})


router.post('/create-the-celebrity', (req, res, next) => {
  let theName = req.body.theCelebName;
  let occupation = req.body.theCelebOccupation
  let catchPhrase = req.body.theCelebPhrase;


  Celebrity.create({
    name: theName,
    occupation: occupation,
    catchPhrase: catchPhrase
  })
    .then((response) => {
      res.redirect('/')
    })
    .catch((err) => {
      next(err)
    })
})


router.get('/details/:id/edit', (req, res, next) => {
  let id = req.params.id;

  Celebrity.findById(id)
    .then((eachCeleb) => {

      res.render('celebrities/editCeleb', { theCelebs: eachCeleb })

    })
    .catch((err) => {
      next(err);
    })
})




router.post('/update/:id', (req, res, next) => {

  let id = req.params.id;

  // id = req.body.theID;
  let name = req.body.name
  let occupation = req.body.occupation
  let catchPhrase = req.body.catchPhrase

  // i put the ID in 2 places, you can do it either way


  // i dont want you to blindly copy this route because it is fancy
  // take a hard look at whats happening or, just cblindly copy and paste the commented code
  Celebrity.findByIdAndUpdate(id, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  })
  .then((response)=>{
    console.log(response)
    res.redirect('/celebrities/details/'+id)
  })
  .catch((err)=>{
    next(err)
  })
  // let update = { ...req.body };

})

// this stupid {new:true} thing is so that after we edit the book the response we get back shows us the new info isntead of the old info, not sure why this isnt the default
//   Book.findByIdAndUpdate(id, update, {new: true})
//   .then((response)=>{
//     console.log(response)
//     res.redirect('/books/'+id)
//   })
//   .catch((err)=>{
//     next(err)
//   })
// })


// })



module.exports = router;

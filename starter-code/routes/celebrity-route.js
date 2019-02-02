const express   = require('express');
const router    = express.Router();

const Celebrity = require('../models/celebrities')


router.get('/', (req, res, next) =>{
  Celebrity.find()
    .then(allCelebrities =>{
      console.log('Our list of celebrities are: ', allCelebrities)
      res.render('celebrities/index', {celebrities: allCelebrities})
    })
    .catch(err => { console.log('Error while getting authors: ', err)})
})



//Create celebrities
router.get('/create', (req, res, next) =>{
  res.render('celebrities/new')
})


//<form action="/celebrities/create" method="post">
router.post('/create', (req, res, next) =>{
  // console.log('data that user put in the form: ', req.body)

  Celebrity.create({
    name: req.body.celebrityName,
    occupation: req.body.celebrityOccupation,
    catchPhrase: req.body.catchPhrase
  })
    .then(newCelebrity => {
      console.log("New author created: ", newCelebrity);
      res.redirect('/celebrities')
    })
    .catch(err => console.log("Error while creating a new author: ", err));
})



//http://localhost:3000/celebrities/5c55e5ff0e91171f0de4b178
router.get('/:celebrityId', (req, res, next) =>{
  const celebrityId = req.params.celebrityId;
  Celebrity.findOne({'_id': celebrityId})
    .then(celebrity =>{
      res.render('celebrities/show', {celebrity})
    })
    .catch(error =>{
      console.log('Error while searching for one celebrity: ', error)
    })
})

//Delete the book route
router.post('/:theCelebrityId', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.theCelebrityId)
    .then(theCelebrity => {
      // console.log('deleted book is: ', theBook)
      res.redirect('/celebrities')
    })
    .catch(err => console.log('Error while deleting the Celebrity: ', err))
})

//GET routes for edit the book
//localhost:3000/celebrities/5c55e5ff0e91171f0de4b179/edit
router.get('/:id/edit', (req, res, next) =>{
  Celebrity.findById(req.params.id)
    .then(foundCelebrity =>{
      console.log('The found celebrity ID is: ', foundCelebrity)
          res.render('celebrities/update', {celebrity: foundCelebrity});
    })
    .catch(err => ('Error while editing celebrity: ', err))
  
})

//localhost:3000/5c55e5ff0e91171f0de4b179/update
//post route to update changes
router.post('/:id/update', (req, res, next) =>{
  console.log('Updates are: ', req.body)
  Celebrity.findByIdAndUpdate(req.params.id)
    .then(updatedCelebrity => {
      console.log('Is this updated: ', updatedCelebrity)
      res.redirect(`/celebrities/${req.params.id}`)
    })
    .catch(err => console.log('Error while saving the updates in DB: ', ERR))
})

//we need to export router
module.exports = router;
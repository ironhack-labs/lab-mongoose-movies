const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')
const uploadMagic = require('../config/cloudinary-setup');
const ensureLogin = require("connect-ensure-login");





// ***-=-=-=-=-Using AXIOS on the front end=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-****

//Instead of rendering the page with all the celebs, what we are doing now
//is getting the info and converting it to json
router.get('/axios', /*ensureLogin.ensureLoggedIn(),*/ (req, res, next) => {
  Celebrity.find()
  .then((theWholeDBArray)=>{
    res.json(theWholeDBArray);
  })
  .catch((err)=>{
    next(err);
  })
});

//I still need to render the file itself, this is basically the new "celebrities" page
router.get('/axios-new', (req, res, next)=> {
  res.render('celebrities/axiosCelebAdd');
})

//before working on the front end, we were passing the information back through here as a POST route
//and then making sure the req.body matches the model and then using the .create method to add it
//to the database and then redirecting to the new celebrity using the ID (I could have also
//routed to any other page).
//Now what we are doing is creating it and not rendering anything becuase the script.js file
//is allowing us to show the information immediatly on the page without reloading
router.post('/axios', (req, res, next)=>{
  const {name, occupation, catchPhrase} = req.body;
  // this is like saying
  // const title = req.body.title;
  // const descrtiption = req.body.descrition;
  // etc.
  let newCeleb = {name: name, occupation: occupation, catchPhrase: catchPhrase }
  Celebrity.create(newCeleb)
  .then((newlyCreatedCeleb)=>{

    res.json({message: 'Sucessfuly Created Celeb'});

  })
  .catch((err)=>{
      res.json(err);
 
  })
})


// ***-=-=-=-=-Using AXIOS on the front end=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-****
//V
//V
//V
//V
//**=-=-=-=-=-=Using EXPRESS on the back end */




/* GET celebrites page */
router.get('/celebrities', /*ensureLogin.ensureLoggedIn(),*/ (req, res, next) => {
  Celebrity.find()
  .then((theWholeDBArray)=>{
    res.render('celebrities/index', {allTheCelebs: theWholeDBArray})
  })
  .catch((err)=>{
    next(err);
  })
});


router.get('/celebrities/new', (req, res, next)=> {
  res.render('celebrities/newCeleb');
})


router.post('/celebrities/create-new-celeb', uploadMagic.single('image'), (req, res, next)=>{
  // const {name, occupation, catchPhrase} = req.body;
  // this is like saying
  // const title = req.body.title;
  // const descrtiption = req.body.descrition; etc...
  let name = req.body.name;
  let occupation = req.body.occupation;
  let catchPhrase = req.body.catchPhrase;
  let image = req.file.url;

  let newCeleb = {name: name, occupation: occupation, catchPhrase: catchPhrase, image: image }
  Celebrity.create(newCeleb)
  .then((newlyCreatedCeleb)=>{

    req.flash('error', (`Successfully added profile for ${newlyCreatedCeleb.name}`))
    res.redirect(`/celebrities/details/${newlyCreatedCeleb._id}`)
  })
  .catch((err)=>{
      // res.json(err);
      // res.render('celebrities/new')
      next(err);
  })
})

router.get('/celebrities/details/:id', (req, res, next) => {
  // console.log("<>><>><><><><><><>><><><><>><><><><><><><><<>");
  
  let celebID = req.params.id
  Celebrity.findById(celebID)
  .then((theSinlgeCeleb)=>{
    // console.log("-------------- ", theSingleCeleb);
    
    res.render('celebrities/show', {celebDeets: theSinlgeCeleb})
  })
  .catch((err)=>{
    next(err);
  })
});

router.post('/celebrities/delete/:id', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then((celebRemoved)=>{
    req.flash('error', (`Successfully deleted profile for ${celebRemoved.name}`))
    res.redirect('/celebrities');
  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/celebrities/edit/:id', (req, res, next) => { //could I have done celeb/:id/edit?
  Celebrity.findById(req.params.id)
  .then((theCelebReturned)=>{
    res.render('celebrities/edit', {theCeleb: theCelebReturned});
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/celebrities/update/:id', uploadMagic.single('image'), (req, res, next) => {
  const theID = req.params.id;
  
  let name = req.body.name;
  let occupation = req.body.occupation;
  let catchPhrase = req.body.catchPhrase;
  let image = ""
  if(req.file){image = req.file.url}
  console.log(req.file)
  let editedCeleb = {name: name, occupation: occupation, catchPhrase: catchPhrase, image: image }
  Celebrity.findByIdAndUpdate(theID, editedCeleb)
  .then((newlyEditedCeleb)=>{
    req.flash('error', (`Successfully edited profile for ${newlyEditedCeleb.name}`))
    res.redirect(`/celebrities/details/${newlyEditedCeleb._id}`);
  })
  .catch((err)=>{
    next(err);
  })
})



module.exports = router;

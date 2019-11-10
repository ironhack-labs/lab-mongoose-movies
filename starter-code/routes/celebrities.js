const express = require('express');
const router = express.Router();
const celebritiesModel = require('../models/Celebrities'); // create this variable to call our db



//iteration 2: GET celebrities page
router.get('/celebrities', (req, res, next) => { // url adress
  celebritiesModel
    .find() // no parameter to call all our celebrities in the db
    .then(dbRes => {
      res.render('celebrities/index', { // render the index.hbs file in the celebrities views folder
        celebritiesDisplay: dbRes // celebritiesDisplay could be named "toto"
      });
    })
    .catch(error => {
      next(); // not sure about that
      console.log("error while retrieving celebrities view", error);
    });
});

// iteration 4 : needs 2 routes :
// 1) for rendering the form where the user can fill all the info about a new celebrity
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

//iteration 3 : celebrity details
router.get('/celebrities/:id', (req, res, next) => {
    celebritiesModel
      .findOne({
        "_id": req.params.id // id = property of params which is property of req
      })
      .then(celebrity => {
        res.render('celebrities/show', { // render the show.hbs file
          celebrityShow: celebrity // celebrityShow is an object and will let us to access its data in the show.hbs file
        });
      })
      .catch(error => {
        next();
        console.log("error while retrieving show of a celebrity", error);
      });
  }

);

// iteration 4 : needs 2 routes :
// 2) for getting the data about the celebrity and add it to the database
router.post('/celebrities', (req, res, next) => {
  // router.post 'celebrities/new" instead ? because conflict with the page with all the celebrities listed..
  // or move this callback before the iteration 2 callback ?
  const {
    name, // same as => const name = req.body.name;
    occupation, // => const occupation = req.body.occupation;
    catchPhrase // => const catchPhrase = req.body.catchPhrase;
  } = req.body;
  // Create an instance of the Celebrity model with the object you made in the previous step:
  const newCelebrity = new celebritiesModel({
    name,
    occupation,
    catchPhrase
  });
  console.log(newCelebrity);

  newCelebrity
    .save()
    .then((celebrity) => {
      res.redirect('celebrities'); // redirect to the list of the celebrities
    })
    .catch((error) => {
      res.render('celebrities/new'); // render the celebrities/view so the user can try again
      console.log(error);
    });
});


console.log("in the celebrities.js file");
// enter in the celebrities.js file thanks to the route declare in the app.js file (celebrities route)

module.exports = router;
const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

//route LIST OF ALL CELEBRITIES
router.get('/celebrities', (req, res, next) => {
   Celebrity.find({}, (err, celebrities) => {
       if (err) {return next(err) }

       res.render('celebrities/index', {
           celebrities: celebrities
       });
   });
});

//route CELEBRITY DETAILS 
router.get("/celebrities/:id", (req,res,next) => {
    const celebrityId = req.params.id;

    Celebrity.findById(celebrityId, (err, celebrity) =>{
        if(err) {next(err)}
        res.render("celebrities/show", {
            celebrity: celebrity
        });
    })
 });

//route GET CREATE A NEW CELEBRITY
router.get("/celebrities/new", (req,res,next) => {
   res.render("celebrities/new");
});

//route POST SAVE A NEW CELEBRITY
router.post('/celebrities', (req, res, next) => {

    //Create a new object with all of the information from the request body.
   const celebrityInfo = {
       name: req.body.name,
       occupation: req.body.occupation,
       catchPhrase: req.body.catchPhrase,
   };
 
   const newCelebrity = new Celebrity(celebrityInfo);

   newCelebrity.save( (err) => {
       // Error Handling
       if (err) { return next(err) }

       // Redirect to the List of Celebrities
       // if it saves.
       return res.redirect('/celebrities');
   });
 });

module.exports = router; 
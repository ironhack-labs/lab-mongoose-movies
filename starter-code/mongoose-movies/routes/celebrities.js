const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

//route LIST OF ALL CELEBRITIES
router.get('/', (req, res, next) => {
   Celebrity.find({}, (err, celebrities) => {
       if (err) {return next(err) }

       res.render('celebrities/index', {
           celebrities: celebrities
       });
   });
});

//route GET CREATE A NEW CELEBRITY
router.get("/new", (req,res,next) => {
   res.render("celebrities/new");
});

//route POST SAVE A NEW CELEBRITY
router.post('/', (req, res, next) => {

    //Create a new object with all of the information from the request body.
   let celebrityInfo = {
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

 //route CELEBRITY DETAILS 
 router.get("/:id", (req,res,next) => {
    let celebrityId = req.params.id;

    Celebrity.findById(celebrityId, (err, celebrity) =>{
        if(err) {next(err)}
        res.render("celebrities/show", {
            celebrity: celebrity
        });
    })
 });

  //route DELETE CELEBRITY
router.post("/:id/delete", (req, res, next) =>{

    let celebrityId = req.params.id;
    console.log(celebrityId + " test");

    Celebrity.findByIdAndRemove(celebrityId, (err, celebrity) => {
        if(err) {return next(err)}
        return res.redirect('/celebrities');
    })
})

module.exports = router; 
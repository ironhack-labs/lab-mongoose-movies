//mandatory
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Celebrity = require("../models/celebrity.js");

//connect to database celebrities
mongoose.connect('mongodb://localhost/celebrities', {useNewUrlParser: true}, function(err){
    if(err) console.log("ERROR",err)
    else console.log("connected")
})


//get celebrities page and call all celebrities with find()
//bulb: Celebrity: variable with data base parameters
router.get("/celebrities", (req, res) => {
    Celebrity.find()
        .then((allCelebrities)=> {
            //render index page with all celebrities
            res.render('celebrities/index.hbs', {allCelebrities})
        })
        .catch((err)=>{
            console.log("error", err)
            next()
        });
});

//get celebrity by Id
router.get('/celebrities/:id', (req, res, next) => {
    //call findById, oneCelebrity it's just an identificator
    Celebrity.findById(req.params.id)
        .then((oneCelebrity) => {
            //render page with a search's results
            res.render('celebrities/show.hbs', { oneCelebrity });
        })
        .catch((err) => {
            console.log('error: ', err);
        next();
        });
});

//render a new page called celebrities 
//after that, create a new celebrities and save data into database
router.get('/celebrities/new', (req, res) => {
    res.render('celebrities/new.hbs')
});

//add new celebrities to database
router.post('/celebrities', (req, res)=>{
    //create a new object for new celebrities
    // console.log("the bodyyyy",req.body) test
    //create data schema
    const addCelebrities = {
        name:req.body.name,
        occupation:req.body.occupation,
        catchPhrase:req.body.catchPhrase,
    }
//asign schema to object and pass parameter addCelebrities
        const newCelebrity = new Celebrity(addCelebrities);
        
            newCelebrity
                .save()//save data into database
                .then(() => {
                    console.log('add ok');
                    //render redirect to celebrities main page
                    res.redirect('/celebrities/');
                })
                .catch((err) => {
                    console.log(err);
                    res.render('celebrities/new');
                 });
});

//eliminate item by ID
//It's not necessary to render a new page, just elimitate one item with submit button
router.post('/celebrities/:id/delete', (req, res, next) => {
    //console.log("hioio") just a test
	Celebrity.findByIdAndRemove(req.params.id)
		.then(() => {
			res.redirect('/celebrities/');
		})
		.catch((err) => {
			console.log(err);
			next();
		});
});

// extra -- extra
//edit item by id
router.get('/celebrities/:id/edit', (req,res,next) =>{
    Celebrity.findById(req.params.id)
        .then((editCelebrity) =>{
            res.render('celebrities/edit', {editCelebrity});
        })
        .catch((err) => {
            console.log('error',err);
        })
})
  
  
//I try to use celebrity find and update by id, but it's not working
router.post('/celebrities/:id', (req, res, next) => {
    Celebrity.update(
        { _id: req.params.id},
        { $set: {   name: req.body.celebritiesName, 
                    occupation: req.body.celebritiesOccupation, 
                    catchPhrase: req.body.celebritiesCatchPhrase } }
    )
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch((err) => {
            console.log(err);
            next();
        });
  });
  

//don't forget call exports router
module.exports=router;



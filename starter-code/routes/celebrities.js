const express      = require('express');
const router       = express.Router();
const Celebrity    = require('../models/Celebrity')

//get reqs always end in a res.render
//post reqs always end in a redirect

//get homepage
router.get('/celebrities', (req, res, next) => {
        
    Celebrity.find()
        .then((listOfCelebrities)=>{
            res.render('celebrities/index', {theCelebrityList: listOfCelebrities})
        })
        .catch((err)=>{
            next(err);
        })
});

//create a new celebrity listing
router.get('/celebrities/new', (req, res, next)=> {
    res.render('celebrities/create');
})

//post a new celebrity listing
router.post('/celebrities/create', (req, res, next)=> {
        
    Celebrity.create({
            name: req.body.name,
            occupation: req.body.occupation,
            catchphrase: req.body.catchphrase,
        })
        .then ((response)=> {
            res.redirect('/celebrities')
        })
        .catch((err)=> {
            next(err);
        })
})

//delete a celebrity listing
router.post("/celebrities/delete/:theid", (req, res, next)=> {

    Celebrity.findByIdAndRemove(req.params.theid)
        .then((response)=>{
            res.redirect("/celebrities")
        })
        .catch((err)=>{
            next(err);
        })
})

//get the edit for a celebrity listing
router.get("/celebrities/edit/:celebrityID", (req, res, next)=>{

    Celebrity.findById(req.params.celebrityID)
        .then((celebrity)=> {
            res.render('celebrities/edit', {theCelebrity: celebrity})
        })
        .catch((err)=>{
            next(err);
        })
})

//post the edited celebrity listing
router.post("/celebrities/update/:celebrityID", (req, res, next)=>{
        
    Celebrity.findByIdAndUpdate(req.params.celebrityID, {
            name: req.body.name,
            occupation: req.body.occupation,
            catchphrase: req.body.catchphrase
        })
        .then((response)=>{
            req.redirect('/celebrities/'+req.params.celebrityID)
        })
        .catch((err)=>{
            next(err);
        })
})


//get celebrity by id
router.get('/celebrities/:theid', (req, res, next)=>{
        
    Celebrity.findById(req.params.theid)
        .then ((celebrity)=> {
            res.render('celebrities/show', {theCelebrity: celebrity})
        })
        .catch ((err)=>{
            next(err);
        })
})

module.exports = router;
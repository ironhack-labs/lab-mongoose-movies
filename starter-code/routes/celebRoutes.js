const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')



// List of celebrities
router.get('/celebs', (req, res, next) => {

    Celebrity.find()
        .then((listOfAllCelebrities) => {

            console.log("ALL CELEBS===============>", listOfAllCelebrities)
            res.render('listOfCelebs', {
                celebrities: listOfAllCelebrities
            })
        })
        .catch((err) => {
            next(err)
        })

})
//END

//Details Page
router.get('/celebs/details/:id', (req, res, next) => {
    console.log("DETAILS PAGE================>")
    let id = req.params.id
    Celebrity.findById(id)
    .then((celebrityObject)=>{
        res.render('detailsPage', {thatCelebrity: celebrityObject})
    })
    .catch((err)=>{
        next(err)
    })
})


//Create New
router.get('/celebs/create-new-celeb', (req,res,next)=>{
    res.render('addNew')
})

//Save New Creation
router.post('/celebs/creation', (req, res, next)=>{
    let name = req.body.theName;
    let occupation = req.body.theOccupation;
    let catchPhrase = req.body.theCatchPhrase

    Celebrity.create({
        name: name,
        occupation: occupation,
        catchPhrase: catchPhrase
    })
    .then((result)=>{
        res.redirect('/celebs')
    })
})


//Delete
router.post('/celebs/delete/:id', (req, res, next)=>{
    let id = req.params.id
    Celebrity.findByIdAndRemove(id)
    .then((result)=>{
        res.redirect('/celebs')
    })
})




module.exports = router;
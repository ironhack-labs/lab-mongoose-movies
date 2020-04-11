const express = require('express');
const router = express.Router();


const Celebrity = require('../models/celebrity')


// GET : /celebrities
router.get('/', (req, res, next) => {

    Celebrity.find().then((celebrities) => {
        res.render('celebrities/index', { allCelebrities: celebrities });
    }).catch(error => {
        console.log("something went wrong with catching all celebrities", error)
    })

});


//GET : /celebrities/new ---> this one allows you to insert a new celebrity

router.get('/new', (req, res, next) => {
    res.render('celebrities/new')
})

//POST : /celebrities/new ---> this one takes the datas and store them into the database

router.post('/new', (req, res, next) => {
    let celebrity=new Celebrity({ name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase })
    celebrity.save().then(() => {
        res.redirect("/celebrities")
    })
})



// GET : /celebrities/id  ---> this shows the details of one celebrity
router.get('/:id', (req , res, next) => {
    Celebrity.findById(req.params.id).then((celebrity) => {
        res.render("celebrities/show", celebrity)
    })
})

//POST : /celebrities/id/delete --->this removes a celebrity from the list

router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/celebrities')
    })
})






module.exports = router
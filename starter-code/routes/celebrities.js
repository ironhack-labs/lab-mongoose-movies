const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

// /* GET home page */
// router.get('/', (req, res, next) => {
//     res.render('index');
// });

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            console.log("test", celebrities)
            res.render("celebrities/index", { celebrities: celebrities })
        })
        .catch(error => {
            console.log(error)
            next();
        })

});

router.get('/celebrities/new', (req, res, next) => {
    res.render("celebrities/new")
});

router.get('/celebrities/:id', (req, res, next) => {
    let id = req.params.id
    Celebrity.findById(id)
        .then(result => {
            console.log("test", result)
            res.render("celebrities/show", { celebrity: result })
        })
        .catch(error => {
            console.log(error)
            next();
        })

});


router.post('/celebrities', (req, res, next) => {
    // If there is an empty title
    if (!req.body.name || !req.body.occupation || !req.body.catchPhrase) {
        res.render('celebrities/new', {
            error: "Please fill out all the fields!"
        })
        return
    }
    Celebrity.create({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
        .then(celebrity => {
            res.redirect('/celebrities')
        })
});


//Route to display the edit form => BONUS
router.get('/celebrities/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => {
            res.render('celebrities/edit', { celebrity })
        })
});


//Route to handle the edit form submission => BONUS
router.post('/celebrities/:id/edit', (req, res, next) => {
    //Find the celebrity and update it with the info from the form
    Celebrity.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
        .then(celebrity => {
            res.redirect('/celebrities/' + celebrity._id)
        })
        .catch(err => {
            console.log('There was an error', err)
        })
});


router.get('/celebrities/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(celebrity => {
            res.redirect('/celebrities')
        })
})

router.get('celebrities/go-back', (req, res, next) => {
    console.log('20.000 Sterne ***********************************')
    res.redirect('index')
})


module.exports = router;

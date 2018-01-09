const express = require('express');

const Celeb = require("../models/celebrity");

const router = express.Router();

router.get('/', (req, res, next) => {
    Celeb.find({}, (err, results) => {
        if (err) {
            console.log("ERROR", err);
            next(err);
            return;
        }
        else {
            res.render('celebrities/index', {results});
        }
    });
});

router.get('/find/:id', (req, res, next) => {
    let id = req.params.id;
    Celeb.findById(id)
    .then(results => {
        // console.log(results.name);
        // console.log(results.catchPhrase);
        res.render('celebrities/show', {results});
    })
    .catch(err => {
        next(err);
        return;
    })
});

router.get('/new', (req, res, next) => {
    res.render("celebrities/new");
});

router.post('/new', (req, res, next) => {

    let newCeleb = {
        name : req.body.name,
        occupation : req.body.occupation,
        catchPhrase : req.body.catchPhrase    
    }

    let newbie = new Celeb(newCeleb);

    newbie.save( err => {
        if (err) {
            next(err);
            let message = {message: err};
            res.redirect('/new');
        }
        else {
            res.redirect('/celebrities');
        }
    })

});

router.post('/:id/delete', (req, res, next) => {
    let id = req.params.id; 
    console.log(id);
    
    Celeb.findByIdAndRemove(id, (err, celebrity) => {
        if(err){ return next(err) };
        return res.redirect('/celebrities');
    }) 
}); 

router.get('/:id/edit', (req, res, next) =>{
    let id = req.params.id;
    Celeb.findById(id)
    .then(result => {
        console.log(result);
        res.render("celebrities/edit", {result});
    })
    .catch(err => {
        next(err);
        return;
    })
});

router.post('/:id', (req, res, next) => {
    const id = req.params.id;
    let update = {
        name:  req.body.name,
        occupation:  req.body.occupation,
        catchPhrase:  req.body.catchPhrase
    };
    Celeb.findByIdAndUpdate(id, update, (err, celeb) => {
        if(err) {return next(err);}
        return res.redirect("/celebrities")
    } )
})
// In that route's callback:
// Use the Celebrity model's findByIdAndRemove method to delete the celebrity by its id.
// If there's an error, call the route's next function and return the error
// If there is no error, redirect to the list of celebrities page.

module.exports = router;
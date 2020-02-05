const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrityModel");

router.get('/celebrities', (req, res, next) => {
    console.log(req.body)
    Celebrity.find()
        .then(dbCelebrities => {
            console.log("DB RESPONSE HERE" + dbCelebrities);
            res.render("celebrities/index", { celebrities: dbCelebrities })
        }
        ).catch(err => {
            next();
            console.log(err)
        })
});

router.get("/celebrities/new", (req, res) => {
    res.render("celebrities/new")
})

router.post('/celebrities/new', (req, res) => {
    const { name, occupation, catchPhrase } = req.body
    Celebrity.create(req.params.id, {
        name: name,
        occupation: occupation,
        catchPhrase: catchPhrase
    }).then(newCeleb => {
        newCeleb.save();
        console.log("HERE IS THE RESP" + newCeleb)
        res.redirect("/");
    }
    )
        .catch(err => {
            res.render("/celebrities/new")
            console.log(err)
        })
})

router.post('/celebrities/:id/delete', (req, res) => {
    Celebrity.findByIdAndDelete(req.params.id)
        .then(() => {
            console.log("DELETED")
            res.redirect("/");
        })
        .catch(err => console.log(err))
})

router.get('/celebrities/:id/update', (req, res) => {
    Celebrity.findById(req.params.id)
        .then(dbRes => res.render("celebrities/update", { celebrity: dbRes }))
        .catch(err => console.log(err))
})



router.get('/celebrities/:id', (req, res) => {
    Celebrity.findById(req.params.id)
        .then(dbRes => res.render("celebrities/show", { celebrity: dbRes }))
        .catch(err => console.log(err))
})

// with the celebrity being called from db to initialize form
// router.post('/update') to post the celeb
router.post('/celebrities/:id/update', (req, res) => {
    // res.send(req.body)
    const { name, occupation, catchPhrase } = req.body
    Celebrity.findByIdAndUpdate(req.params.id, {
        name: name,
        occupation: occupation,
        catchPhrase: catchPhrase
    }).then(updatedCeleb => console.log("HERE IS THE RESP" + updatedCeleb))
        .catch(err => console.log(err))
})




//put the get for the specific celeb - put after the stuff above but before the /new because :id could be anything

// router.get(/new)


module.exports = router;
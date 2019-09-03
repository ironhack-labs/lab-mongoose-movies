const express = require("express");
const router = express.Router();
const CelebrityModel = require("./../model/celebrity");

router.post("/celebrity", (req, res) => {
    console.log(req.body); // create an object with the name="" of the form 
    // visible in the console
    // res.send("new Celebrity created!");
    const {name, occupation, catchPhrase} = req.body
    CelebrityModel.create({
        name,
        occupation,
        catchPhrase
    })
    .then(dbEntry => {
        res.redirect('/celebrities');
        console.log('Celebrity is created!');
    }).catch(dbErr => {
        res.render('/celebrities/new_celebrity');
        console.log(dbErr);
    });
});


router.post('/delete-celebrity/:id', (req, res, next) => {
    console.log(req.params.id)
    CelebrityModel.findByIdAndRemove(req.params.id)
        .then(dbRes => {
            res.redirect('/celebrities');
            console.log('Celebrity is deleted!', dbRes);
            
        }).catch(dbErr => {
            next()
            console.log(dbErr);
            
        });
});

module.exports = router;

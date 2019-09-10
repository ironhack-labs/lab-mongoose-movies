const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get("/celebrities", (req, res, next) => {
    console.log("called");
    Celebrity.find()
        .then(celeb => {
            console.log(celeb);
            res.render("/celebrities/index.hbs", { celebList: celeb });
        })
        .catch(err => {
            console.log(err);
        });
});

router.post("/celebrities", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;

    Celebrity.create({
        name,
        occupation,
        catchPhrase
    })
        .then(celeb => {
            console.log(`Success! ${name} was added to the database.`);
            // res.redirect('/books');
            // res.redirect(`/celebrities/${_id}`);
        })
        .catch(err => {
            console.log("Error while adding a celebrity to the DB");
            next(err);
        });
});

router.get("/celebrities/add", (req, res) => {
    res.render("../views/celebrities/new.hbs");
});

router.get("/celebrities/:celebId", (req, res) => {
    const celebId = req.params.celebId;

    Celebrity.findById(celebId).then(celeb => {
        res.render("../views/celebrities/index.hbs", { celeb });
    });
});

module.exports = router;

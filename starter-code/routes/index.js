const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

/*########################################################################################################*/
router.post("/", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;

    Celebrity.create({
        name,
        occupation,
        catchPhrase
    })
        .then(celebrity => {})
        .catch(err => {
            console.log("Error while adding a book to the DB");
            next(err);
        });
});

router.get("/", (req, res, next) => {
    console.log("called");
    Celebrity.find()
        .then(celeb => {
            console.log(celeb);
            res.render("index.hbs", { celebList: celeb });
        })
        .catch(err => {
            console.log(err);
        });
});
/*########################################################################################################*/
module.exports = router;

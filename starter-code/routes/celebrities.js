const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");


router.get("/", (req, res, next) => {
    Celebrity.find()
        .then(allTheCelebritiesFromDB => {
            // console.log('Retrieved movies from DB:', allTheCelebritiesFromDB);

            res.render("celebrities/index", {
                allTheCelebritiesFromDB
            });
        })
        .catch(error => {
            console.log('Error while getting the movies from the DB: ', error);
        })
})



router.get("/:id", (req, res, next) => {

    Celebrity.findOne({
            _id: req.params.id
        })
        .then(detailed => {
            // console.log("Retrieved details from DB:", detailed)
            res.render("celebrities/celebdetails", {
                detailed
            })
        })
        .catch(err => console.log(err))
})

router.post("/add", (req, res, next) => {
    const {
        name,
        occupation,
        catchphrase
    } = req.body
    Celebrity.create({
            name,
            occupation,
            catchphrase
        })
        .then(data =>
            res.redirect("/celebrities")
        )

        .catch(err => error)
})

router.post("/:id/delete", (req, res, next) => {
    Celebrity.findByIdAndRemove({
            _id: req.params.id
        })
        .then(detailed => {
            // console.log("Retrieved details from DB:", detailed)
            res.redirect("/celebrities")
        })
        .catch(err => console.log(err))

})

router.get('/:id/edit', function (req, res, next) {
    Celebrity.findOne({
        _id: req.params.id
    }, (err, theCelebrity) => {
        if (err) {
            return next(err);
        }
        res.render('celebrities/edit', {
            title: `Edit ${theCelebrity.name}`,
            celebrity: theCelebrity,
        });
    });
});

router.post('/:id', function (req, res, next) {
    const actualizacion = {
        name: req.body.name,
        occupation : req.body.occupation,
        catchphrase : req.body.catchphrase
    }; 
    Celebrity.update({_id: req.params.id}, actualizacion)
        .then(display => res.redirect("/celebrities"))
        .catch(err => console.log(err))
})


module.exports = router;
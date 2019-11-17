const express = require('express');
const router = express.Router();
const Celebrity = require("../models/celebrity");


router.get("/", (req, res) => {
    Celebrity.find()
        .then(celebrity => res.render("celebrities/index", { celebrity }))
        .catch(err => {
            console.log(err);
            next();
        });
});

router.get("/new", (req, res, next) => {
    res.render("celebrities/new")
})


router.post("/", (req, res, next) => {
    Celebrity.create({
        'name': req.body.name,
        'occupation': req.body.occupation,
        'catchPhrase': req.body.catchPhrase,
    }).then(celebrityCreated => {
        celebrityCreated.save(err => {
            if (err) {
                res.render("celebrities/new", {
                    errorMessage: "Ups!Error.Try again."
                });
                return;
            }
            res.redirect("/celebrities");
        });
    });
});


router.get("/:id", (req, res) => {
    let celebrity = req.params.id;
    Celebrity.findOne({ _id: celebrity })
        .then(celebrity => {
            console.log(celebrity)
            res.render("celebrities/show", celebrity);
        })
        .catch(err => {
            console.log(err);
            next();
        });
});


router.get("/:id/edit", (req, res, next) => {
    let celebrity = req.params.id;
    Celebrity.find({ _id: celebrity })
        .then(celebrity => {
            console.log(celebrity)
            res.render("celebrities/edit", celebrity[0]);
        })
        .catch(err => {
            console.log(err);
            next();
        });
});


router.post("/:id", (req, res, next) => {
    let id = req.params.id;
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.update({ _id: id }, { $set: { name, occupation, catchPhrase } })
        .then(() => res.redirect(`/celebrities/${id}`))
        .catch(error => next(error));
});


router.post("/:id/delete", (req, res, next) => {
    let celebrity = req.params.id;
    Celebrity.findByIdAndRemove({ _id: celebrity })
        .then(() => {
            res.redirect("/celebrities");
        })
        .catch(err => {
            console.log(err);
            next();
        });
});


module.exports = router;

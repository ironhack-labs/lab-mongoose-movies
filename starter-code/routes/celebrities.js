const express = require("express");
const routers = new express.Router();
const celebrityModel = require("../models/celebrity");

routers.get("/celebrities", (req, res, next) => {
    celebrityModel
        .find()
        .then(celebrities => {
            res.render("celebrities/index", {
                celebrities
            });
        })
        .catch(dbErr => next(dbErr));
});

routers.get("/celebrities/new", (req, res, next) => {
    res.render("celebrities/new");
});

routers.get("/celebrity/:id", (req, res, next) => {
    celebrityModel
        .findById(req.params.id)
        .then(celebrity => {
            res.render("celebrities/show", {
                celebrity
            });
        })
        .catch(dbErr => next(dbErr));
});

routers.post("/celebrities", (req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body;
    celebrityModel
        .create({
            name,
            occupation,
            catchPhrase
        })
        .then(dbRes => res.redirect("/celebrities"))
        .catch(dbErr => {
            res.render("celebrities/new");
        });
});

routers.post("/celebrity/:id/delete", (req, res, next) => {
    celebrityModel
        .findByIdAndDelete(req.params.id)
        .then(dbRes => {
            console.log(dbRes);
            res.redirect("/celebrities");
        })
        .catch(dbErr => {
            next(dbErr);
        });
});
routers.get("/celebrity/:id/edit", (req, res, next) => {
    celebrityModel.findById(req.params.id)
        .then(celebrity => {
            res.render("celebrities/update", {
                celebrity
            })
        })
        .catch(dbErr => next(dbErr))
});

routers.post("/celebrities/:id", (req, res, next) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body;
    celebrityModel
        .findByIdAndUpdate(req.params.id, {
            name,
            occupation,
            catchPhrase
        })
        .then(dbRes => {
            console.log(dbRes);
            res.redirect("/celebrities");
        })
        .catch(dbErr => {
            next(dbErr);
        });
});

module.exports = routers;
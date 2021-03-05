const express = require("express");
const router = express.Router();
const celebrityModel = require("./../model/celebrity")

router.get("/", (req, res, next) =>{
    celebrityModel.find()
    .then((celebrityList) => {
        res.render("celebrities/all-celebrities", { celebrity: celebrityList })
    })
    .catch((error) => {
        next(error);
    })
})

router.get("/new", (req, res, next) => {
    res.render("celebrities/new-celebrity")
})

router.post("/new", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    celebrityModel.create(req.body)
    .then(() => {
        res.redirect("/")
    })
    .catch((error) => {
        next(error);
      })
})

router.get("/:id", (req, res, next) => {
    celebrityModel.findById(req.params.id) 
    .then((celebrity) => {
        res.render("celebrities/celebrity-detail", { celebrity })
    })
    .catch((error) => {
        next(error);
      })
})

router.get("/:id/update", (req, res, next) => {
    celebrityModel.findById(req.params.id) 
    .then((celebrity) => {
        res.render("celebrities/edit-celebrity", { celebrity })
    })
    .catch((error) => {
        next(error);
      })
})

router.post("/:id/update", (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body
    celebrityModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect("/celebrities")
    })
    .catch((error) => {
        next(error);
      })
})

router.get("/:id/delete", (req, res, next) => {
    celebrityModel.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/celebrities")
    })
    .catch((error) => {
        next(error);
    })
})

module.exports = router;
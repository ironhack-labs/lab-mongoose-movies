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

module.exports = router;
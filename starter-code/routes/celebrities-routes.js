const express = require("express");
const router = new express.Router();
const celebrity = require("../models/celebrity")
// const uploader = require("./../config/cloudinary");

router.get ("/celebrities/new", (req, res, next) => {
    res.render ("new-celebrity");
});

router.post ("/celebrities/create"), (req, res, next) => {
celebrity.create(req.body)
.then((createCelebrity) => {
    console.log("new celeb added", createCelebrity);
    res.redirect("/celebrities");
})
.catch(() => {
    res.redirect("new-celebrities")
});

router.get("/celebrities", (req, res, next) => {
    CelebrityModels.find()
    .then((celebrity) => res.render(celebrities/celebrities, { celebrity }))
    .catch((error) => console.log(error));
});







module.exports = router;
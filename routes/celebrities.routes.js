const express = require("express");
const Celebrity = require("../models/celebrity.model");
const router = express.Router();

router.get("/", (req, res) => {
    Celebrity.find()
        .then((celebrities) =>
            res.render("celebrities/index", {
                celebrities,
            })
        )
        .catch((err) => console.log("ERROR:", err));
});

router.get("/new", (req, res) => res.render("celebrities/new"));

router.post("/new", (req, res) => {
    const {
        name,
        occupation,
        catchPhrase
    } = req.body;
    Celebrity.create({
            name,
            occupation,
            catchPhrase,
        })
        .then(() => {
            if (
                name === undefined ||
                occupation === undefined ||
                catchPhrase === undefined
            ) {
                res.redirect("/celebrities/new");
            } else {
                res.redirect("/celebrities");
            }
        })
        .catch(() => res.redirect("/celebrities/new"));
});

router.get("/edit/:celebrity_id", (req, res) => {
    const celebrity_id = req.params.celebrity_id;

    Celebrity.findById(celebrity_id)
        .then((celebrityDetails) =>
            res.render("celebrities/edit", celebrityDetails)
        )
        .catch((err) => console.log("ERROR:", err));
});

router.post("/edit/:celebrity_id", (req, res) => {
    const celebrity_id = req.params.celebrity_id;

    const {
        name,
        occupation,
        catchPhrase
    } = req.body;

    Celebrity.findByIdAndUpdate(celebrity_id, {
            name,
            occupation,
            catchPhrase,
        })
        .then(() => res.redirect("/celebrities"))
        .catch((err) => res.redirect("/celebrities/edit", err));
});

router.post("/:celebrity_id/delete", (req, res) => {
    const id = req.params.celebrity_id;
    Celebrity.findByIdAndDelete(id)
        .then(() => res.redirect("/celebrities"))
        .catch((err) => console.log("ERROR:", err));
});
router.get("/:celebrity_id", (req, res) => {
    const id = req.params.celebrity_id;
    Celebrity.findById(id)
        .then((fullCelebrity) => res.render("celebrities/show", fullCelebrity))
        .catch((err) => console.log("ERROR:", err));
});

module.exports = router;
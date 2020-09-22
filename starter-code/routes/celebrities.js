const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

// Get them all
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so "/albums" here
router.get("/", async (req, res, next) => {
    try {
        const allCelebrities = await Celebrity.find()
        res.render("celebrities/index.hbs", { celebrities: allCelebrities });
    } catch (error) {
        next(error)
    }
});



// Get one
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/page/:id here
router.get("/:id", (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((dbRes) => {
        res.render("celebrities/show.hbs", { celebrity: dbRes });
    })
    .catch(next);
});

// Display the edit form with the albums fields filled
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/:id/edit here
router.get("/:id/edit", (req, res) => {});

// Listen to the post of the edit form
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/:id/edit here
router.post("/:id/edit", (req, res) => {});

// Get the create form
// prefixed with /albums in app.js (app.use("/albums", albumsRouter))  /albums/create
router.get("/new", (req, res) => {
    res.render("celebrities/new.hbs");
});

// Listen to the post of the create form
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/create here
router.post("/new", async (req, res, next) => {
    try {
        const newCelebrity = req.body;
        const createdCelebrity = await Celebrity.create(newCelebrity);
        res.redirect("/celebrities");
    } catch (error) {
        next(error);
    }
});

// Listen to the delete
// // prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/:id/delete here
router.get("/:id/delete", (req, res) => {});

module.exports = router;

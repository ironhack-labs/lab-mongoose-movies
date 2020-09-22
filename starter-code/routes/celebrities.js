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

// Get the create form
// prefixed with /albums in app.js (app.use("/albums", albumsRouter))  /albums/create
router.get("/create", async (req, res, next) => {

});

// Listen to the post of the create form
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/create here
router.post("/create", async (req, res, next) => {

});

// Display the edit form with the albums fields filled
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/:id/edit here
router.get("/:id/edit", (req, res) => {});

// Listen to the post of the edit form
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/:id/edit here
router.post("/:id/edit", (req, res) => {});

// Listen to the delete
// // prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so /albums/:id/delete here
router.get("/:id/delete", (req, res) => {});

module.exports = router;

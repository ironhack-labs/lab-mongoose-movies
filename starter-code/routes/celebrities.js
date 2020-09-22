const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");


//Create
router.get("/new", (req, res) => {
  res.render("celebrities/new.hbs");
});

router.post("/new", async (req, res, next) => {
  try {
    const newCelebrity = req.body;
    const createdCelebrity = await Celebrity.create(newCelebrity);
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});

// Get them all
// prefixed with /albums in app.js (app.use("/albums", albumsRouter)) so "/albums" here
router.get("/", async (req, res, next) => {
  try {
    const allCelebrities = await Celebrity.find();
    res.render("celebrities/index.hbs", { celebrities: allCelebrities });
  } catch (error) {
    next(error);
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



//Delete part
router.post("/:id/delete", async (req, res, next) => {
  try {
    const removeCelebrity = req.params.id;
    const deletedCelebrity = await Celebrity.findByIdAndDelete(removeCelebrity);
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});

router.get("/:id/edit", async (req, res, next) => {
    try {
        const editingCelebrity = await Celebrity.findById(req.params.id);
        res.render("celebrities/edit.hbs", {editingCelebrity});
    } catch (error) {
        next(error)
    }
  });
  

router.post("/:id/edit", async (req, res, next) => {
    try {
      const editedCelebrity = await Celebrity.findByIdAndUpdate(req.params.id, req.body);
      res.redirect("/celebrities");
    } catch (error) {
      next(error);
    }
  });

module.exports = router;

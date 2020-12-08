const express = require('express');
const router = express.Router();

const CelebrityModel = require("./../models/Celebrity");

// /celebrities GET route for showing celebrities list
router.get("/", async (req, res, next) => {
        try {
                const listCelebrities = await CelebrityModel.find();
                // console.log("list: ", listCelebrities);
                res.render("celebrities/index", { listCelebrities })
        } catch (err) {
                next(err)
        }
})

// /celebrities/new GET route for showing a form to create a celebrity
router.get("/new", (req, res, next) => {
        try {
                res.render("celebrities/new")
        } catch (err) {
                next(err)
        }
})

// /celebrities/:id GET route for showing celebrity details
router.get("/:id", async (req, res, next) => {
        try {
                const celebrity = await CelebrityModel.findById(req.params.id);
                res.render("celebrities/show", celebrity)
        } catch (err) {
                next(err)
        }
})

// /celebrities/:id/edit GET route for showing a form to edit a celebrity 
router.get("/:id/edit", async (req, res, next) => {
        try {
                const editCelebrity = await CelebrityModel.findById(req.params.id);
                // console.log(editCelebrity)
                res.render("celebrities/edit", editCelebrity)
        } catch (err) {
                next(err)
        }
})


// /celebrities POST route to receive data and save it to the database
router.post("/", async (req, res, next) => {
        try {
                await CelebrityModel.create(req.body);
                res.redirect("/celebrities")

        } catch (err) {
                res.render("celebrities/new", { tryAgain: 'Try again' })
        }
})

// /celebrities/:id/delete POST route for deleting a specific celebrity
router.post("/:id/delete", async (req, res, next) => {
        try {
                // console.log(req.params.id)
                await CelebrityModel.findByIdAndRemove(req.params.id);
                res.redirect("/celebrities")

        } catch (err) {
                next(err);
        }
})

// /celebrities/:id POST router to editing details of existing celebrity
router.post("/:id", async (req, res, next) => {
        try {
                await CelebrityModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
                res.redirect("/celebrities");
        } catch (err) {
                next(err);
        }
})

module.exports = router;
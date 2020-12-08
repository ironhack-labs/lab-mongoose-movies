const express = require("express");
const { render } = require("../app");
const router = new express.Router();
const CelebrityModel = require("./../models/Celebrity");


// Iteration #2: Listing Our Celebrities
router.get("/celebrities", async(req, res, next) => {
    // res.send('hah')
    try {
        const celebrities = await CelebrityModel.find();
        // console.log(celebrities);
        res.render("celebrities/index", {celebrities});
    }catch(err){
        next(err);
    }
})

// Iteration #4: Adding New Celebrities
router.get("/celebrities/new", (req, res, next) => {
    try {
        res.render("celebrities/new");
    }catch(err){
        next(err);
    }
})


router.post("/celebrities/new", async(req, res, next) => {
    try {
        console.log(req.body);
        await CelebrityModel.create(req.body);
        res.redirect("/celebrities");
      } catch (err) {
        next(err);
      }
})


// Iteration #3: The Celebrity Details Page
router.get("/celebrities/:id", async(req, res, next) => {
    try {
        const celeb = await CelebrityModel.findById(req.params.id);
        // console.log(celebrities);
        // res.send("hihi");
        res.render("celebrities/show", celeb);
    }catch(err){
        next(err);
    }
})


// Iteration #5: Deleting Celebrities
router.get("/celebrities/:id/delete", async (req, res, next) => {
    try {
      await CelebrityModel.findByIdAndRemove(req.params.id);
      res.redirect('/celebrities')
    } catch (err) {
      next(err)
    }
  })


//  Iteration #6 (Bonus): Editing Celebrities
router.get("/celebrities/:id/edit", async (req, res, next) => {
    // res.send('working');
    try{
        const edit = await CelebrityModel.findById(req.params.id);
        res.render('celebrities/edit', edit)
    }catch(err){
        next(err);
    }
})



router.post('/celebrities/:id/edit', async (req, res, next) => {
    try{
        const update = await CelebrityModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        console.log(update);
        res.redirect('/celebrities')
    }catch(err){
        next(err)
    }
})




module.exports = router;
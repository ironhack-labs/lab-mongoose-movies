const express = require('express');
const router  = express.Router();
const CelebrityModel = require("./../models/celebrity")

//DISPLAY ALL CELEBRITIES
router.get("/", async (request, res, next) => {
    try {
    const celebrities = await CelebrityModel.find();
    res.render("celebrities/index", {celebrities});
    } catch (err) {
        next(err)
    }
    });
  

//DISPLAY FORM TO CREATE

router.get('/new', (req, res, next) => {
    res.render("celebrities/new");
   });
   


//POST FORM
router.post("/new", async (req, res) => {
    const {name, occupation, catchPhrase} = req.body;

    const newCeleb = {
       name,
       occupation,
       catchPhrase
    }

    const createdCeleb = await CelebrityModel.create(newCeleb);

res.redirect("/celebrities");
})







//DISPLAY ONE CELEBRITY    
router.get("/:id", async (req, res, next) => {
    try {
        const celebrity = await CelebrityModel.findById(req.params.id);
        res.render("celebrities/show", celebrity)
    } catch (err) {
        next(err);
    }
});





router.get('/:id/delete', async function (req, res, next) {
    try {
      await CelebrityModel.findByIdAndRemove(req.params.id)
      res.redirect('/celebrities')
    } catch {
    res.redirect('celebrities/new');
    }
  })




  router.get('/:id/update', async function (req, res, next) {
    try {
      const oneCeleb = await CelebrityModel.findById(req.params.id)
      res.render("celebrities/edit", oneCeleb)
    } catch (err) {
      next(err)
    }
  })

  router.post('/:id/update', async function (req, res, next) {
    try {
      const updatedCeleb = await CelebrityModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.redirect('/celebrities')
    } catch (err) {
      next(err)
    }
  })
  


  module.exports = router;
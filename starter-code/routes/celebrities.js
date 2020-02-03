const express = require("express");
const router = express.Router();
const Celebrities = require("../models/celebrity");


//Iteration 2: Show Our Celebrities
router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrities.find();
    res.render("celebrities/index", { celebrities });
  } catch (error) {
    console.log(`Error retrieving celebrities ${error}`);
  }
});


//Iteration 4: Adding New Celebrities

router.get("/new", async (req, res, next) => {
  try {
    //const celebrities1 = await Celebrities.find();
    res.render("celebrities/new");
  } catch (error) {
    console.log(`Error adding celebrities ${error}`);
  }
});


router.post('/celebrities/new', (req, res, next) => {

});



//Iteration 3: The Celebrity Details Page

router.get("/:celebritiesId", async (req, res, next) => {
  try {
    const { celebritiesId } = req.params;
    const celebrity = await Celebrities.findById(celebritiesId);
    res.render("celebrities/show", { celebrity });
  } catch (error) {
    console.log(`ERROR finding celebrity by id ${error}`);
  }
});











// router.get("/new", async (req, res, next) => {
//   try {
//     const celebNew = await Celebrities.find();
//     res.render("celebrities/new", { celebNew });
//   } catch (error) {
//     console.log(`Error retrieving celebrities ${error}`);
//   }
// });





module.exports = router;

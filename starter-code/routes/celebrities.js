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

//Iteration 3: The Celebrity Details Page

router.get("/", async (req, res, next) => {
  try {
    const { id } = req.params;
    const celebrity = await Celebrity.findById(id);
    res.render("celebrities/show", { celebrity });
  } catch (error) {
    console.log(`Error finding celebrity by id ${error}`);
  }
});



// router.get('/celebrities/:celebritiesId', (req, res, next) => {
//   Book.findById(req.params.bookId)
//     .then(theCelebrity => {
//       res.render('celebrities/show', { celebrities: theCelebrity });
//     })
//     .catch(error => {
//       console.log('Error while retrieving celebrity details: ', error);
//     })
// });

// router.get("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const celebrity = await Celebrity.findById(id);
//     res.render("celebrities/show", { celebrity });
//   } catch (error) {
//     console.log(`Error finding celebrity by id ${error}`);
//   }
// });

// Iteration 3

// router.get('/celebrities/:celebritiesId', (req, res, next) => {
//   console.log('The ID from the URL is: ', celebritiesId);
//   res.render('celebrity-details');
// });



module.exports = router;

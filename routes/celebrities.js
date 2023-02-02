const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity.model");

// ITERATION 2: list the celebrities

router.post("/celebrities/:theID/delete", (req, res, next) => {
  console.log("delete touched");
  const id = req.params.theID;
  Celebrity.findByIdAndRemove(id)
    .then(() => res.redirect("/celebrities"))
    .catch((err) => {
      console.log("========>", err);
    });
  // .next((err) => {
  //   return err
  // })
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find().then((celebrityList) => {
    res.render("celebrities/index", { celebrities: celebrityList });
  });
  // .next((err) => {
  //   return err
  // })
});

// ITERATION 4: adding new celebrities 

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new"); //hbs
});

router.post("/celebrities", (req, res) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  }).then(() => {
    res.redirect("celebrities");
  });
});

// ITERATION 5: deleting celebrities



// ITERATION 3: see celebrity details

router.post("/celebrities/:id", (req, res) => {
  Celebrity.findById(req.params.id).then((oneCelebrity) => {
    console.log("Retrieved celeb from DB:", oneCelebrity);
    res.render("celebrities/show", { oneCelebrity: oneCelebrity });
  });
  // .next((err) => {
  //   return err
  // })
});

// // BONUS ITERATION 6: editing celebrities

// router.get('/celebrities/:id/edit', (req, res, next) => {
//   const id = req.params.id;
//   Celebrity.findById(id)
//     .then(() => {
//       res.render('celebrities/edit')
//     })
// });

// router.post('/celebrities/:id', (req, res, next) => {
//   const id = req.params.id;
//   Celebrity.update({ name: req.body.name, occupation: req.body.occupattion, catchPhrase: req.body.catchPhrase }).then(() => {
//     res.redirect('celebrities')
//   })
// })

module.exports = router;

const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

//Read
router.get("/celebrities", (req, res) => {
  Celebrity.find({})
    .then((dbResult) => {
      res.render("celebrities/index.hbs", {
        toto: dbResult,
      });
    })
    .catch((err) => {
      res.render("error.hbs")
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((dbResult) => {
      console.log(dbResult)
      res.render("celebrities/show.hbs", {
        celeb: dbResult,
      });
    })
    .catch((err) => {
      res.render("error.hbs", {
        message: err.message,
      })
    });
});

// Create - render the form

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new.hbs')
});


// Create - submit the form

router.post("/celebrities", (req, res) => {
  // const {
  //   name,
  //   occupation,
  //   catchPhrase
  // } = req.body;
  // const newCelebrity = new Celebrity({
  //   name,
  //   occupation,
  //   catchPhrase
  // })
  Celebrity.create(req.body)
    .then((dbResult) => {
      res.redirect("/celebrities");
    })
    .catch((dbErr) => {
      res.render('celebrities/new.hbs', {
        error: "you must fill in all the fields..."
      });
    });
});

// Delete


router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then((dbResult) => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      res.render("error.hbs", {
        message: err.message
      })
    })
})

// Edit - render the form

// router.get("celebrities/:id/edit", (req, res, next) => {
//   Celebrity.findById(req.params.id)
//   .then((dbResult) => {
//   res.render("celebrities/edit.hbs");
// })
//   .catch((err) => {
//     res.render("error.hbs", {
//       message: err.message,
//     })
//   })
// });


// Edit - submit the form

// router.post("celebrities/:id", (req, res, next) => {
//       const {
//         name,
//         occupation,
//         catchPhrase
//       } = req.body;
//       Celebrity.update(req.params.id), {
//         $set: {
//           name,
//           occupation,
//           catchPhrase
//         }
//       });
//     .then((dbResult) => {
//       console.log(dbResult)
//       res.redirect("/celebrities", {
//           celeb: dbResult,
//         })
//         .catch((err) => {
//           res.render("error.hbs", {
//             message: err.message,
//           })
//         })
//     })
//   });

    module.exports = router;
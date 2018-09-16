// const express = require("express");
// const router = express.Router();
// const Celebrity = require("../models/celebrity");

// router.get("/celebrity", (req, res, next) => {
//   Celebrity.find()
//     .then(celebrities => {
//       res.render("./celebrities/index", { celebrities });
//       console.log(celebrities);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// router.get("/show/:id", (req, res) => {
//   Celebrity.findById(req.params.id)
//     .then(celebrities => {
//       res.render("./celebrities/show", { celebrities });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// router.get("/new", (req, res) => {
//   res.render("./celebrities/new");
// });

// router.post("/new/create", (req, res, next) => {
//   const { name, occupation, catchPhrase } = req.body;
//   const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
//   newCelebrity
//     .save()
//     .then(() => {
//       res.redirect("/celebrity");
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// router.post("/celebrities/:id/delete", (req, res, next) => {
//   Celebrity.findByIdAndRemove(req.params.id)
//     .then(() => {
//       res.redirect("/celebrity");
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// router.get("/celebrities/:id/edit", (req, res) => {
//   Celebrity.findById(req.params.id)
//     .then(celebrities => {
//       console.log(celebrities);
//       res.render("./celebrities/edit", { celebrities });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// router.post("/celebrities/:id/editone", (req, res) => {
//   const { name, occupation, catchPhrase } = req.body;
//   Celebrity.update(
//     { _id: req.params.id },
//     { $set: { name: name, occupation: occupation, catchPhrase: catchPhrase } },
//     { new: true }
//   )
//     .then(() => {
//       console.log(Celebrity);
//       res.redirect("/celebrity");
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// module.exports = router;

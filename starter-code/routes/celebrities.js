const express = require('express');
const router = express.Router();
const celebrityModel = require("../models/celebrity")


// find id's
// router.get('/', (req, res, next) => {
//     celebrityModel.find()
//         .then(celebrities => {
//             res.render('celebrities/index.hbs', {
//                 celebrities: celebrities
//             });
//         })
//         .catch(error => {
//             console.log('Error', error);
//         })
// });

// display info of celebrities

// router.get('/:id/single', (req, res, next) => {
//     celebrityModel.findById(req.params.id)
//         .then(celebrity => {
//             res.render('celebrities/celeb', {
//                 celebrity: celebrity
//             });
//         })
//         .catch(error => {
//             console.log('Error', error);
//         })
// });

// router.get("/new", (req, res) => {
//     res.render("celebrities/new");
// });

// create celebrities

// router.post('/new', (req, res, next) => {
//     const {
//         name,
//         occupation,
//         catchPhrase
//     } = req.body;
//     celebrityModel
//         .create({
//             name,
//             occupation,
//             catchPhrase
//         })
//         .then((celeb) => {
//             res.redirect('/celebrities');
//         })
//         .catch((error) => {
//             console.log(error);
//             res.send("Oh no, an error ocurred while creating new celebrity !");
//         })
// });

// delete celebrities

// router.post("/:id/single/delete", (req, res) => {
//     celebrityModel
//         .findByIdAndDelete(req.params.id)
//         .then(dbRes => {
//             res.redirect("/celebrities");
//         })
//         .catch(dbErr => {
//             res.redirect("/celebrities");
//         });
// });


module.exports = router;
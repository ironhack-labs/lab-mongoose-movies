// const express = require('express');
// const router = express.Router();
// const Celebrity = require("../models/celebrity");


// router.get('/celebrities', (req, res, next) => {
//   Celebrity.find()
//     .then(celebsFromDB => {
//       res.render('celebrities/index', {celebsFromDB})
//     })
//     .catch(error => {
//       console.log('Error', error)
//       next();
//     })
// });

// router.get('/celebrities/:id', (req, res, next) => {
//   Celebrity.findById(req.params.id)
//     .then(celeb => {
//       res.render("celebrities/show", {celeb});
//     })
//     .catch(err => {
//       console.log(err);
//       next();
// });
// })

// router.get('/celebrities/new', (req, res, next) =>{
//   res.render('celebrities/new')
// });

// router.post('/celebrities', (req, res, next) => {
//   console.log(req.body)
//   const addNewCeleb = {
//     name: req.body.name,
//     occupation: req.body.occupation,
//     catchPhrase: req.body.phrase
//   }

//   const newCeleb = new Celebrity(addNewCeleb);

//   newCeleb.save()

//     .then(() => {
//       console.log('added')
//       res.redirect('/celebrities/')
//     })
//     .catch(err => {
//       console.log(err);
//       res.render("celebrities/new");
//     })
// });

// router.post('/celebrities/:id/delete', (req, res, next) => {
//   Celebrity.findByIdAndRemove(req.params.id)
//       .then(() => {
//         res.redirect('/celebrities/')
//       })
//       .catch(err => {
//         console.log(err);
//         next();
//   });
// })

// router.get('/celebrities/:id/edit', (req, res, next) => {
//   Celebrity.findById(req.params.id)
//     .then(edit => {
//       res.render('celebrities/edit', {edit})
//     })
//     .catch(err => {
//       console.log(err);
//     })
// })

// router.post('/celebrities/:id', (req, res, next) => {
//   Celebrity.update({_id:req.params.id}, 
//     { $set: {name: req.body.name, occupation: req.body.occupation, catchPhrase:req.body.phrase }})
//       .then(() =>{
//         res.redirect('/celebrities')
//       })
//       .catch(err => {
//         console.log(err);
//         next();
//       });
// })

// module.exports = router;
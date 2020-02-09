const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  celebModel
    .find()
    .then(dbRes => {
      console.log(dbRes);
      // Put all data into an obj called celebrities:
      res.render('index', {celebrities : dbRes});
    })
    .catch(error => {
      console.log(error)}
  });

  router.get('/:id', (req, res) => {
    celebModel
      .findbyId(req.params.id)
      .then(dbRes => {
        console.log(dbRes);
        // Put all data into an obj called celebrities:
        res.render('index', {celebrities : dbRes});
      })
      .catch(error => {
        console.log(error)}
    });
  


// router.get("/admin", protectAdminRoute, (req, res, next) => {
//   artistModel
//     .find() // retreive all the documents in the artists collection
//     .then(dbResults => {
//       res.render("tables/artists", {
//         artists: dbResults
//       });
//     })
//     .catch(next);
// });




// // Route to get all products
// app.get("/products", function(req,res) {
//   db.Product.find({})
//   .then(function(dbProducts) {
//     res.json(dbProducts);
//   })
//   .catch(function(err) {
//     res.json(err);
//   })
// });


// // Find all users using callbacks instead of promises
// User.find({}, (error, users) => {
//   if (error) {
//     // ... handle error
//   } else {
//     // ... handle users
//   }
// });

// Celebrity.find()
// .then(celebrities => {
//   // handle users
// })
// .catch(error => {
//   // handle error
// });

// app.post('/user', function(req, res) {
//   service.create(req.body, function(err, obj) {
//     if (err) {
//       res.send(500);
//     } else {
//       res.send(obj);
//     }

// var Athlete = mongoose.model('Athlete', yourSchema);

// // find all athletes who play tennis, selecting the 'name' and 'age' fields
// Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
//   if (err) return handleError(err);
//   // 'athletes' contains the list of athletes that match the criteria.
// })

module.exports = router;
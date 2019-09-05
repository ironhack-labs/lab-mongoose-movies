const express = require("express");
const router = express.Router();
//const CelebrityModel = require("./../models/Celebrity");
const MovieModel = require("./../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// router.get("/celebrities", (req, res, next) => {
//   CelebrityModel.find()
//     .then(dbRes => {
//       console.log(dbRes);
//       res.render("celebrities/index", { celebrities: dbRes });
//     })
//     .catch(dbErr => console.log(dbErr));
//   //
// });

// router.get("/celebrities/:id", (req, res, next) => {
//   console.log(req.params.id);
//   CelebrityModel.findById(req.params.id)
//     .then(dbRes => {
//       console.log(dbRes);
//       res.render("celebrities/details", { celebrity: dbRes });
//     })
//     .catch(dbErr => console.log(dbErr));
//   //
// });

// router.get("/create-one-celebrity", (req, res) => {
//   res.render("celebrities/create");
// });

// router.post("/create-new-celebrity", (req, res) => {

//   const { name, occupation, catchPhrase } = req.body;

//   CelebrityModel.create({
//     name,
//     occupation,
//     catchPhrase
//   })
//   .then(dbRes => {
//     console.log(dbRes);
//     res.redirect("/celebrities");
//   })
//   .catch(dbErr => {
//     console.log(dbErr);
//     res.render("celebrities/create", {msg: "database error, sorry"});
//   });
// });

// router.post("/delete-user/:id", (req, res) => {
//   CelebrityModel.findByIdAndRemove(req.params.id)
//   .then(dbRes => {
//     console.log(dbRes);
//     res.render("celebrities/delete", { celebrity: dbRes });
//     res.redirect("/celebrities");
//   })
//   .catch(dbErr => console.log(dbErr));
// });

// //ITERATION 6
// router.get("/celebrities/:id/edit", (req, res) => {
//  console.log(req.params.id)
//   res.render("celebrities/edit", {celebId: req.params.id});
// });

// router.post("/edit-celebrity", (req, res) => {
// //console.log(req.body, "iciii")
//   CelebrityModel.findByIdAndUpdate( req.body.id,req.body)
// .then( dbRes => {
//   console.log(dbRes);
//   res.redirect('/celebrities');
// })
// .catch((dbErr)=>{
//   console.log(dbErr)
//   res.redirect('/celebrities/edit')
// });	
  
// });

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then(dbRes => {
      console.log(dbRes);
      res.render("movies/index", { movies: dbRes });
    })
    .catch(dbErr => console.log(dbErr));
  //
});

router.get("/movies/:id", (req, res, next) => {
  console.log(req.params.id);
  MovieModel.findById(req.params.id)
    .then(dbRes => {
      console.log(dbRes);
      res.render("movies/details", { movie: dbRes });
    })
    .catch(dbErr => console.log(dbErr));
  //
});

router.get("/create-one-movie", (req, res) => {
  res.render("movies/create");
});

router.post("/create-new-movie", (req, res) => {

  const { title, genre, plot } = req.body;

  MovieModel.create({
    title,
    genre,
    plot
  })
  .then(dbRes => {
    console.log(dbRes);
    res.redirect("/movies");
  })
  .catch(dbErr => {
    console.log(dbErr);
    res.render("movies/create", {msg: "database error, sorry"});
  });
});

router.post("/delete-movie/:id", (req, res) => {
  MovieModel.findByIdAndRemove(req.params.id)
  .then(dbRes => {
    console.log(dbRes);
    res.render("movies/delete-movie", { movie: dbRes });
    res.redirect("/movies");
  })
  .catch(dbErr => console.log(dbErr));
});

//ITERATION 12
router.get("/movies/:id/edit", (req, res) => {
 console.log(req.params.id)
  res.render("movies/edit-movie", {celebId: req.params.id});
});

router.post("/edit-movie", (req, res) => {
//console.log(req.body, "iciii")
  MovieModel.findByIdAndUpdate( req.body.id,req.body)
.then( dbRes => {
  console.log(dbRes);
  res.redirect('/movies');
})
.catch((dbErr)=>{
  console.log(dbErr)
  res.redirect('/movies/edit-movie')
});	
  
});

module.exports = router;

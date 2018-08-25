const express = require("express");
const router = express.Router();
const CelebrityModel = require("../models/CelebrityModel"); //#1
const MovieModel = require("../models/MovieModel"); //#7

/* GET for home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/*********************PART ONE - CELEBRITIES*********************************************/

//GET for Celebrities Main Page
//# 2
router.get("/celebrities", (req, res, next) => {
  CelebrityModel.find()
    .then(celebrities => {
      //asked for celebrities, so render celebrities hbs
      //then pass the celebrities object as 2nd parameter to use on hbs page
      res.render("celebrities", { celebrities: celebrities });
    })
    .catch(err => {
      console.log("Sorry, we could not pass the celebrities");
    });
});

//GET for celebrities details page
// use /:id to access a specific celeb in the database,
//the object ID will always be different so use :id and capture it (the ID) from the req.params.[id] where it is stored
//use that ID and pass it to the databse to locate the celeb
//#3
router.get("/celebrities/:id", (req, res, next) => {
  //what does ID mean?
  let id = req.params.id;
  CelebrityModel.findById(id)
    .then(foundCeleb => {
      console.log("Hello", foundCeleb);
      res.render("celebritiesdetails", foundCeleb);
    })
    .catch(err => {
      console.log("Sorry, we could not pass the celebrity ID");
    });
});

/****************************************************************/

//GET for (ARRIVING AT THE FORM that will) add a new celebrity page
//#4
router.get("/newceleb", (req, res, next) => {
  res.render("newceleb");
});

//POST for (SUBMITTING THE FORM) add a new celeb page
// --- the form will have a POST as the method ----
router.post("/newceleb", (req, res, next) => {
  // -- because the form submits, name, occupation, catchphrase, these are "captured" from the BODY i.e.
  // req.body.[etc], and stored in object variable
  // this object variable is then directly send to the Model as a new addition
  let brandNewCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchphrase: req.body.catchphrase
  };
  //SEND the form here as a new object to database
  CelebrityModel.create(brandNewCeleb)
    .then(_ => {
      console.log("Form worked!!");
      //after all done, redirect to celebrities to see the new list
      // no need to render because no new views were requested
      //alternatively could "res.send("Successfully added!)""
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("Form not successful!");
    });
});

/****************************************************************/

//DELETING requires taking away, so this is the POST to make a change to server
//Delete takes away, no need to render a new page with deletion, instead redirect
//What celeb to delete? - use ID from params, then pass it in
//#5
router.post("/celebrities/:id/delete", (req, res, next) => {
  let id = req.params.id;
  CelebrityModel.findByIdAndRemove(id)
    .then(_ => {
      console.log("Deleted!");
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("Celeb was not deleted!");
    });
});

/****************************************************************/

//GET for (ARRIVING AT THE FORM that will) edit a new celebrity page
//what celeb = id
//#6
router.get("/celebrities/:id/edit", (req, res, next) => {
  let id = req.params.id;
  CelebrityModel.findById(id).then(foundCeleb => {
    console.log("ID for Edit found", foundCeleb);
    res.render("edit", foundCeleb);
  });
});

//POST for (SUBMITTING THE FORM that will) edit a new celebrity page
//what celeb to edit? = id
//post = redirect

router.post("/celebrities/:id/edit", (req, res, next) => {
  let id = req.params.id; // to find the ID of the celeb

  //after finding, save the changes to the instance in a NEW variable
  let editedCeleb = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchphrase: req.body.catchphrase
  };

  //use Model.update() to change the instance

  /*Model.update ( {_id: theIDnumber}, { $set: THEUPDATEDOBJECT } )   no need for curly braces around object name 
  when stored as variable; the braces are implied since it's an object*/

  CelebrityModel.update({ _id: id }, { $set: editedCeleb }).then(
    editedCeleb => {
      console.log("---------->", id, editedCeleb, "Celeb was edited!");
      res.redirect("/celebrities"); // post = redirect
    }
  );
});

/*********************PART TWO - MOVIES*********************************************/

//#8
//GET for Movies Main Page
router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then(movies => {
      // console.log(movies);
      res.render("movies", { movies: movies });
    })
    .catch(err => {
      console.log("Sorry, we could not pass the movies");
    });
});

//GET for Movies detail page
//#9
router.get("/movies/:id", (req, res, next) => {
  //what does ID mean?
  let id = req.params.id;
  // console.log(id);
  MovieModel.findById(id)
    .then(foundMovie => {
      res.render("moviesdetails", foundMovie);
    })
    .catch(err => {
      console.log("Sorry, we could not pass the movies ID");
    });
});

//#10
//GET for ARRIVNG AT FORM for new movie
router.get("/newmovie", (req, res, next) => {
  res.render("newmovie");
});

//POST for SUBMITING form for new movie
//post = redirect

router.post("/newmovie", (req, res, next) => {
  let brandNewFilm = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };
  //SEND the form here as a new object to database
  MovieModel.create(brandNewFilm)
    .then(_ => {
      console.log("Movie submission worked!!");
      res.redirect("/movies");
    })
    .catch(err => {
      console.log("Movie submission not successful!");
    });
});

//#11
//POST for deleting
router.post("/movies/:id/delete", (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  MovieModel.findByIdAndRemove(id)
    .then(_ => {
      console.log("Deleted!");
      res.redirect("/movies");
    })
    .catch(err => {
      console.log("Movie was not deleted!");
    });
});

//#12
//GET for (ARRIVING AT THE FORM that will) edit a movie page

router.get("/movies/:id/edit", (req, res, next) => {
  let id = req.params.id;
  // console.log(id);
  MovieModel.findById(id).then(foundMovie => {
    console.log("ID for movie edit found", foundMovie);
    res.render("editmovie", foundMovie);
  });
});

//POST for (SUBMITTING THE FORM that will) edit a movie page
//what movie to edit? = id
//post = redirect

router.post("/movies/:id/edit", (req, res, next) => {
  let id = req.params.id; // to find the ID of the movie

  //after finding, save the changes to the instance in a NEW variable
  let editedMovie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot
  };

  //use Model.update() to change the instance

  /*Model.update ( {_id: theIDnumber}, { $set: THEUPDATEDOBJECT } )   no need for curly braces around object name 
  when stored as variable; the braces are implied since it's an object*/

  MovieModel.update({ _id: id }, { $set: editedMovie }).then(editedMovie => {
    // console.log("---------->", id, editedMovie, "Movie was edited!");
    res.redirect("/movies"); // post = redirect
  });
});

module.exports = router;

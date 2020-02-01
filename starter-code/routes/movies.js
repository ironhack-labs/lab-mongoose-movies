const express = require('express');
const router = new express.Router();
const movieModel = require("./../models/Movie");


router.get("/movies", (req, res, next) => {
    movieModel
    .find()
    .then(movies => {
        res.render("movies/index", {
          movies
        });
      })
      .catch(dbErr => {
        console.log("OH NO ! Database error", dbErr);
      });
    });



router.get("/movies/new", (req, res, next)  => {
        res.render("movies/new");
    });
    


router.post("/movies/new", (req, res, next)=> {
 const { title, genre, plot} = req.body;
    movieModel
    .create({
      title,
      genre,
      plot
    })
    .then(dbRes => res.redirect("/movies"))
    .catch(dbErr => {
      console.log(dbErr);
     res.render("movies/new");

    });
  });




    router.get("/movies/:id", (req, res, next)=> {
        movieModel
        .findById(req.params.id)
        .then(movie=> {
            res.render("movies/show", { movie });
            })
        .catch(dbErr => console.error("OH no, db err :", dbErr));
    });


    router.get("/movies/:id/delete", (req, res, next) => {
        movieModel
        .findByIdAndDelete(req.params.id)
        .then(dbRes => {
            res.redirect("/movies");
        })
        .catch(dbErr => console.error("OH no, db err :", dbErr));
    })

    router.get("/movies/:id/edit", (req, res, next) => {
        movieModel
        .findById(req.params.id)
        .then(dbRes => {
          res.render("movies/edit", { movies : dbRes });
        })
        .catch(dbErr => console.error(dbErr));
    });
    
    
    
    
    
    router.post("/movies/:id/edit", (req,res, next) => {
        const { title, genre, plot} = req.body;
        movieModel
        .findByIdAndUpdate(req.params.id, {
            title, 
            genre,
            plot
        })
        .then(dbRes => {
            res.redirect("/movies");
        })
        .catch(dbErr => {
            console.error("OH no, db err :", dbErr) 
            res.redirect("/movies")
            
         } );
    })

    module.exports = router;

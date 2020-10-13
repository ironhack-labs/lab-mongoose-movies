const express = require("express");
const router = express.Router();
require("dotenv").config();
const MoviesModel = require("../models/movies.model");


router.get("/", (req, res) => {
     MoviesModel.find().then((movies) => {
        res.render("movies.hbs", { movies });
      });
    });

    // movies/showdetails/:id

    router.get("/showdetails/:id", (req, res) => {
      let id = req.params.id;
    MoviesModel.findById(id)
      .then((movies) => {
        res.render("showmovies.hbs", { movies });
      });
    });
    

// movies/new
router.get('/new', (req, res, next) => {
      res.render('newmovies.hbs');
    });

  router.post("/new", (req, res) => {
        MoviesModel.create(req.body)
          .then((movies) => {
          res.redirect("/movies");
        });
      })


     
router.get("/remove/:id/delete",(req,res)=>{
      let id = req.params.id;

      MoviesModel.findByIdAndDelete(id)
      .then((movies) => {
            res.redirect("/movies");
          });
        })




module.exports = router;

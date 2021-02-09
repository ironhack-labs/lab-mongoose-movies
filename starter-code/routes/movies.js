const express = require("express");
// require the Movies model here

const Movies = require("../models/movie.model.js");
const router = express.Router();

// ITERATION 4. Create new movie

router.get("/movies/new",(req,res,next)=>{
    
     res.render("movies/new")
})

router.post("/movies/new",(req,res,next)=>{
    const {title, genre, plot} =req.body

    Movies.create({title, genre, plot})
    .then((newMovie)=>{
        console.log(newMovie)
        res.redirect("/movies")
    }).catch((error)=>{
        next(error)
    })

})

// ITERATION 5.  Delete a movie

router.post("/movies/:movieId/delete",(req,res,next)=>{
    const id = req.params.movieId

    Movies.findByIdAndDelete(id).then((movieDeleted)=>{
        console.log(movieDeleted)
        res.redirect("/movies")
    }).catch((error)=>{
        next(error)
    })

})


// ITERATION 2. Listing the movies

router.get("/movies", async(req, res, next) => {

    try {
     const movieDB = await Movies.find();
     console.log(movieDB);
     res.render("movies/index",{movies:movieDB});
   } catch (e) {
     next(e);
   } 
 });

 // ITERATION 3. Getting the details

 router.get("/movies/:movieId",(req,res,next)=>{
     const id = req.params.movieId

     Movies.findById(id).then((movieFound)=>{
         console.log(movieFound)
         res.render("movies/show",movieFound)
     }).catch((error)=>{
         next(error)
     })
 })

//ITERATION 6 -BONUS - Edit a movie

router.get("/movies/:idMovie/edit",(req,res,next)=>{

    const id = req.params.idMovie

    Movies.findById(id).then((movieFound)=>{
        console.log(movieFound)
        res.render("movies/edit",movieFound)
    })
})

router.post("/movies/:idMovie/edit",(req,res,next)=>{
    const id = req.params.idMovie

    const {title, genre, plot} =req.body

    Movies.findByIdAndUpdate(id,{title, genre, plot},{new:true})
    .then((movieUpdated)=>{
        console.log(movieUpdated)
        res.redirect("/movies")
    }).catch((error)=>{
        next(error)
    })

})

module.exports = router;
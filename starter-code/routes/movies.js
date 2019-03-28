const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");

router.get("/",(req,res)=>{
    Movie.find()
.then(movies =>{
  res.render("movies", {movies});
})
.catch(err=>{
  console.log(err);
})
});

router.get("/detail/:id",(req,res)=>{
    const {id} = req.params;
    Movie.findById(id)
.then((movie) =>{
  res.render("detailmovies",movie);
})
.catch(err=>{
  console.log(err);
})
});

// para agregar pelìculas

router.get("/new",(req,res)=>{
    res.render("newmovie");
  });

// para el guardado de una nueva pelicula:
router.post("/new",(req,res)=>{
    console.log(req.body);
    Movie.create(req.body)
    .then(()=>{
    res.redirect("/movies")})
    .catch(err=>{
        console.log(err)
    })
    });

// Para la ediciòn de una pelìcula:

router.get("/:id/edit",(req,res) =>{
    const {id} = req.params;
     Movie.findById(id)
     .then(movie=>{ // si no fuera por ID, tendrìa que usar llaver {} en book;
       res.render("newmovie",movie);
     })
   });

// Para guardar la ediciòn:

router.post("/:id/edit",(req,res) =>{
    const {id} = req.params;
     Movie.findByIdAndUpdate(id,{$set:{...req.body}}) 
     .then(movie =>{
       console.log(movie)
       res.redirect(`/movies`)
     })
   })

// para borrar el registro (serà un botòn en el detail):

router.post("/detail/:id",(req,res)=>{
    const {id} = req.params;
    console.log(id);
    Movie.findByIdAndDelete(id)
    .then(movie =>{
        console.log(movie)
        res.redirect(`/movies`)
      })
})

module.exports = router;

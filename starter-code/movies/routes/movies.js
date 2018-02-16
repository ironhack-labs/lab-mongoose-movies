var express = require('express');
const Movie = require('../models/Movie');
var router = express.Router();

//RENDERIZA LA VISTA DE AÑADIR UNA NUEVA PELICULA
router.get("/new", (req, res, next) => {
    res.render("movies/new");
});

// ME LLEVA AL LISTADO DE PELICULAS
router.get("/",(req,res,next)=>{
    Movie.find({}, (err,docs)=>{
        if(err){
            next();
            return;
        }else{
         
            console.log(docs);
            res.render("movies/index", {mov:docs});
        }
      });
});



//  me muestra en detalle las peliculas
router.get("/:id",(req,res,next)=>{
    const id= req.params.id;
    Movie.findById(id,(err,doc)=>{
      res.render ("movies/show",{movie:doc});
    })
});

//  update actualizo una pelicula
router.get("/:id/edit", (req,res,next)=>{
    const id=req.params.id;
    console.log(id);
    Movie.findById(id,(err,doc)=>{
        if (err){
            next();
            return err;
        }else{
            res.render("movies/edit",{movie:doc});
        }
    });
});


// tomo los datos para actualizar una pelicula y los envio a mi nuevo objeto

// en forms utilizo body- los ids y de las rutas utilizo params
router.post('/:id', (req, res, next) => {
    const movieId = req.params.id;
  
    const updatedMovie={
        title:req.body.title,
        genre:req.body.genre,
        plot:req.body.plot
    };
    Movie.findByIdAndUpdate(movieId, updatedMovie, (err, product) => {
      if (err){ return next(err); }
      return res.redirect('/movies');
    });
  });


// dlete una pelicula
router.post("/:id/delete", (req,res,next)=>{
    const id=req.params.id;
    Movie.findByIdAndRemove(id,(err,doc)=>{
        if (err){
            next();
            return err;
        }else{
            res.redirect("/movies");
        }
    })
});


  router.post("/",(req,res,next)=>{
      const newMovie=new Movie({
          title:req.body.title,
          genre:req.body.genre,
          plot:req.body.plot
      });
      newMovie.save((err,movie)=>{
          if (err){
            res.redirect("movies/new");
          }else{
            res.redirect("movies");
          }
          
      });

  })





module.exports = router;

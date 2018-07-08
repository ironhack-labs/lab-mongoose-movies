const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.post("/:id", (req,res)=>{
    Movie.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(()=>{
        res.redirect('/movies')
    })
    .catch(e=>{
        next();
        throw e;
    })
})

router.get("/:id/edit", (req,res, next)=>{
    Movie.findById(req.params.id)
    .then(movie=>{
        res.render('./movies/edit', {movie})
    })
    .catch(e=>{
        next();
        throw e;
    })
})

router.post("/:id/delete", (req,res,next)=>{
    Movie.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect("/movies")
    })
    .catch(e=>{
        next();
        throw e;
    })
})

router.post("/",(req,res)=>{
    Movie.create(req.body)
    .then(()=>{
        res.redirect("/movies")
    })
    .catch(e=>{
        res.render('./movies/new')
        throw e;
    })
})

router.get("/new", (req,res)=>{
    res.render('./movies/new')
})

router.get("/:id", (req,res)=>{
    Movie.findById(req.params.id)
    .then(movie =>{
        console.log(movie);
        res.render('./movies/show', {movie})
    })
    .catch(e=>{
        next();
        throw e;
    })
});

router.get('/', (req,res,next)=>{
    Movie.find()
    .then(movies =>{
        console.log(movies);
        res.render('./movies/index', {movies});
    })
    .catch(e=>{
        next();
        throw e;
    })
});

module.exports = router;
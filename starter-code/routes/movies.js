const express = require('express');
const router = express.Router();
const Movies = require('../models/movie');

router.get('/', (req,res)=>{
    Movies.find()
    .then(movies=>{
        res.render('movies/index', {movies})
    }).catch(err=>{
        throw err;
    })
});

router.post('/', (req,res)=>{
    Movies.create(req.body)
    .then(()=>{
        res.redirect('/movies');
    })
    .catch(err=>{
          console.log(err)//checar el movies git para poner el render con el err
    })
});

router.get('/:id', (req, res)=>{
    const id = req.params.id;
    Movies.findById(id)
    .then(movie=>{
        res.render('/movies/show', {movie})
    })
    .catch(err=>{
        throw err;
    })
});

router.post('/delete/:id2', (req,res)=>{
    const del = req.params.id2;
    Movies.findByIdAndRemove(del)
    .then(()=>{
        res.redirect('/movies')
    })
    .catch(err=>{
        throw err;
    })
});

router.post('/:id', (req,res)=>{
    const update = req.body;
    Movies.findByIdAndUpdate(req.params.id, update)
    .then(()=>{
        res.redirect('/movies')
    })
    .catch(err=>{
        throw err;
    })
});

router.get('/edit/:id3', (req,res)=>{
    const edit = req.params.id3
    Movies.findById(edit)
    .then(movie=>{
        res.render('movies/edit', {movie});
    })
    .catch(err=>{
        throw err;
    })
});


router.get('/new', (req, res) => {
    res.render('movies/new');
});


module.exports = router;
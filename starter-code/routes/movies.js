const express = require('express');
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

mongoose.connect('mongodb://localhost/lab-mongose-movies', {useNewUrlParser: true})
.then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});

module.exports = findMovies = (app)=>{
  app.get('/movies', (req, res, next)=>{
  Movie.find({}).then(data =>{
    res.render('movies/index', {data});
  }).catch(err=>console.log(err));
});
}

module.exports = newMovieForm = (app)=>{
  app.get('/movies/new', (req, res, next)=>{
    res.render('movies/new');
  });
}

module.exports = addNewMovie = (app)=>{
  app.post('/movie', (req, res, next)=>{
      Movie.create({title, genre, plot} = req.body).then(data=>{
      res.redirect('/movies');
    }).catch(err=>console.log(err));
  })
}

module.exports = findMovieById = (app)=>{
  app.get('/movie/:id', (req, res, next)=>{
    Movie.findById(req.params.id).then(data=>{
      res.render('movies/show', {data});
    })
  })
}


module.exports = deleteMovie = (app)=>{
  app.post('/movie/:id/delete', (req, res, next)=>{
    Movie.findByIdAndRemove(req.params.id).then(data=>{
      console.log(data);
      res.redirect('/movies');
    }).catch(err=>{
      console.log(err);
      res.redirect('/movies');
    })
  })
}

module.exports = updateMovieForm = (app)=>{
  app.get('/movie/:id/edit', (req, res, next)=>{
      Movie.findById(req.params.id).then(data=>{
        res.render('./movies/edit', {data});
      })
  });
}

module.exports = updateMovie = (app)=>{
  app.post('/movie/:id', (req,res,next)=>{
    Movie.findByIdAndUpdate(req.params.id,{title, genre, plot}=req.body).then(data =>{
      res.redirect('/movies')
      console.log('Succes' + data);;
    }).catch(err=>console.log('Error while updating: '+ err));
  });
}
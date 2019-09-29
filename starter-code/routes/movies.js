const rout = require('express').Router();
const movieModel = require('../models/movie')

rout.get('/index', (req, res, next) => {
  movieModel.find()
    .then((data) => {
      // res.send(data)
      res.render('movies/index', {
        data
      })
    })
    .catch((error) => {
      next();
      console.log(error);
    })
});

rout.get('/:id', (req, res, next) => {
  const {id} = req.params;
  console.log(id);
  movieModel.findById(id)
    .then((data) => {
  // console.log(data);
  // res.send({data);
      res.render('movies/show', data)
    })
    .catch((error) => {
      next();
      console.log(error);
    })
});

rout.get('/new', (req, res, next) => {
      res.render('movies/new');
});

rout.post('/', (req, res, next) => {
  const {title,genre,plot} = req.body;
  movieModel.create({title,genre,plot})
  .then(() => res.redirect('movies/index'))
  .catch(err => console.log(err));
});

rout.post('/:id/delete', (req, res, next) => {
  const {id} = req.params;
  movieModel.findByIdAndDelete(id)
  .then((data) => {
    res.redirect('/');
  })  
  .catch((err) => console.log(err))
});

rout.get('/:id/edit', (req, res, next) => {
  const {id} = req.params;
  movieModel.findById(id)
  .then(data => {
    // res.send(data);
    res.render('movies/edit', data);
  })  
  .catch((err) => console.log(err))
});

rout.post('/:id', (req,res,next) => {
  const {id} = req.params;
  movieModel.findByIdAndUpdate(id, req.body)
  .then(data => {
    res.redirect('/');
  })
  .catch(err => console.log(err));
});

module.exports = rout;
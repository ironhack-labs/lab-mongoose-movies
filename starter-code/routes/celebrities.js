'use strict';
const express = require('express');
const router = express.Router();
const Celebrity = require('../modules/celebrity.js');
const Movie = require('../modules/movies.js');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

/*------------ Home Page ----------------- */

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(celebrity => {
    res.render('celebrities/index', {celebrity});
  })
  .catch(error => {
    // console.log('error', error);  
    const err = new Error ('Falló la conexión a las base de datos'); /* podemos crear nuestro propio error*/
    next(err);
  })
});

/* --------- Add a new Celebrity ----------*/

router.get('/new', (req, res, next) => {
  res.render('celebrities/add')
});

router.post('/add', (req, res, next) => {
  const celebrity = req.body;
  Celebrity.create(celebrity)
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(error => { 
    console.log('Error', error);
    const err = new Error ('Falló la conexión a las base de datos'); /* podemos crear nuestro propio error*/
    next(err);
  })
})

/*--------- Edit a Celebrity ----------*/

router.post('/:_id/delete', (req, res, next) => {
  const id = req.params._id;
  Celebrity.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    console.log('error', error);
    const err = new Error ('Falló la conexión a las base de datos'); /* podemos crear nuestro propio error*/
    next(err);
  })
})

/*----------- Edit Celebrity ------------*/

router.get('/:_id/edit', (req, res, next) => {
 const id = req.params._id;
 Celebrity.findById(id)
 .then(celebrity => {
  res.render('celebrities/edit', {celebrity}) 
 })
 .catch(error => {
   console.log('error', error)
   const err = new Error ('Falló la conexión a las base de datos'); /* podemos crear nuestro propio error*/
    next(err);
 })
});

router.post('/:_id/', (req, res, next) => {
  const id = req.params._id;
  const celebrity = req.body;
  Celebrity.findByIdAndUpdate(id, celebrity)
  .then(result => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    console.log("Error updating celebrity", error)
    const err = new Error ('Falló la conexión a las base de datos'); /* podemos crear nuestro propio error*/
    next(err);
  })
});


/*------- Find Celebrity by ID --------*/

router.get('/:_id', (req, res, next) => {
  const id = req.params._id;
  Celebrity.findById(id)
  .then(celebrity => {
    Movie.find()
    .then(book => {  
      res.render('celebrities/show', {celebrity, book})
    })
    .catch(error=>{
      console.log('error', error);
      const err = new Error ('Falló la conexión a las base de datos'); /* podemos crear nuestro propio error*/
      next(err);
    })
  })
  .catch(error=>{
    console.log('error', error);
    const err = new Error ('Falló la conexión a las base de datos'); /* podemos crear nuestro propio error*/
    next(err);
  })
});

/*--------- Add favorite Books ----------*/

router.get('/:_id/favorites', (req, res, next) => {
  const id = req.params._id;

  Celebrity.findById(id)
  .then(celebrity => {
    console.log(celebrity);
  })
  .catch(error=>{
    console.log('error', error);
    next(error);
  })
})

router.post('/:_id/favorites', (req, res, next) => {
  const idBook = req.body.book;
  const idCelebrity = req.params._id;
  Celebrity.findById(idCelebrity)
  .populate('favoriteBooks')
  .then(celebrity => {
    console.log(celebrity);
    celebrity.favoriteBooks.push(ObjectId(idBook));
    celebrity.save();
    res.redirect('/celebrities');
  })
  .catch(error=>{
    console.log('error', error);
    next(error);
  })
})

 module.exports = router;

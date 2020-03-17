const express = require('express');
const routerCelebretity = express.Router();
const Celebrity = require('./../models/celebrity')



routerCelebretity.get('/', (req, res) => {
  Celebrity.find()
    .then( (allCelebrities) => {
    res.render('celebrities', {celebrities: allCelebrities})
  })
    .catch( (err) => console.log(err));
})

routerCelebretity.get('/new', (req, res) =>{
  res.render('celebrities/new');
})

routerCelebretity.post('/new', (req, res) =>{
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name,occupation, catchPhrase})
    .then((newCelebrity) => {
      res.redirect('/celebrities')
    })
    .catch( (err) => {
      res.render('celebrities/new');
    })
})

routerCelebretity.post('/:id/delete', (req, res) =>{
  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch( (err) => console.log(err));
})

routerCelebretity.get('/:id', (req, res) =>{
  Celebrity.findById(req.params.id)
    .then( oneCelebrity => {
      res.render('celebrities/show', {celebrity: oneCelebrity})
    })
    .catch( (err) => console.log(err));
})

routerCelebretity.post("/:id", (req, res, next) => {
    const { name, occupation, catchPhrase} = req.body;    
    Celebrity.updateOne({ _id: req.params.id }, { $set: { name, occupation, catchPhrase } })
    .then(() => res.redirect("/celebrities"))
    .catch(err => next(err));
});


routerCelebretity.get('/:id/edit', (req, res) =>{
  Celebrity.findById(req.params.id)
    .then( oneCelebrity => {
      res.render('celebrities/edit', {celebrity: oneCelebrity})
    })
    .catch( (err) => console.log(err));
})


module.exports = routerCelebretity; 

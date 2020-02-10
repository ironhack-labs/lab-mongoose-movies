const express = require('express');
const celebritiesRouter = express.Router();

const Celebrity = require('./../models/Celebrity')

//POST '/celebrities/edit'
celebritiesRouter.post('/edit', (req, res) => {
  const _id = req.query._id;
  const {name, occupation, catchPhrase} = req.body;

  Movie.updateOne({_id}, {name, occupation, catchPhrase})
    .then( () => {
      res.redirect('/celebrities')
    })
    .catch( (err) => console.log(err));
})

// GET '/celebrities/edit' --renders the edit form
celebritiesRouter.get('/edit', (req, res) => {
  const {_id} = req.query;

  Celebrity.findOne({_id: _id})
    .then( oneCelebrity => {
      const celebrity = oneCelebrity;
      res.render('celebrities/edit', {celebrity});
    })
    .catch( (err) => console.log(err));
})


//GET /celebrities/:id/delete
celebritiesRouter.post('/:id/delete', (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch( (err) => {
      next(err)})
});

//GET /celebrities/new
celebritiesRouter.get('/new', (req, res) => {
  res.render('celebrities/new');
})

celebritiesRouter.post('/new', (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
  .then((celebrity) => {
    res.redirect('/celebrities')
  })
  .catch( (err) => {
    res.render('celebrities/new');
  })
});


//GET /celebrities/:id
celebritiesRouter.get('/:id', (req, res) =>{
  Celebrity.findById(req.params.id)
    .then( oneCelebrity => {
      const celebrity = oneCelebrity;
      res.render('celebrities/show', {celebrity})
    })
    .catch( (err) => console.log(err));
})

//GET /celebrities
celebritiesRouter.get('/', (req, res) => {
  Celebrity.find()
    .then( (allCelebrities) => {
    const celebrities = allCelebrities;
    res.render('celebrities', {celebrities})})
    
    .catch( (err) => console.log(err));
})

// celebritiesRouter.post('/', (req, res) => {
//   res.send();
// })

module.exports = celebritiesRouter;
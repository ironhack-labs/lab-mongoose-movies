const express = require('express');
const Celebrity = require('../models/Celebrity.model');
const router  = express.Router();


router.get('/', (req,res, next)=>{Celebrity.find()
.then((celebrities) => res.render('celebs/celebrities', {celeb:celebrities}))
.catch(err => res.render('celebs/index'))
});

router.get('/new', (req, res, next) => {
  res.render('celebs/new');
});

router.post('/new', (req, res) => {
   const {  name, catchPhrase, occupation} = req.body;
  Celebrity.create({ name, catchPhrase, occupation })
    .then(() => res.redirect('/celebrities'))
   .catch(error => res.render('celebs/new'));
});


router.get('/:id', (req,res, next)=>{Celebrity.findById(req.params.id)
  .then((celeb) => res.render('celebs/show', celeb))
  .catch(err => res.render('/celebs/index'))
  });

  router.post('/:id/delete', (req, res, next) => {
    Celebrity.findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect('/celebrities'); 
      })
      .catch(err => console.error('Error deleting the celebrity', err));
  });
  

router.get('/:id/edit', (req, res) => {
  Celebrity.findById(req.params.id)
    .then(celebToEdit => {
      res.render('celebs/celeb-edit', celebToEdit); 
    })
    .catch(error => console.log(`Error while getting a single celebrity for edit: ${error}`));
});

router.post('/:id/edit', (req, res) => {
  const { id } = req.params;
  const { name,  catchPhrase, occupation } = req.body;
  Celebrity.findByIdAndUpdate(id, { name, catchPhrase, occupation }, { new: true })
    .then(updatedceleb => res.redirect(`/celebrities/${updatedceleb._id}`))
    .catch(error => console.log(`Error while updating a single celebrity: ${error}`));
});

 
module.exports = router;

const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/celebrities', (req, res, next) => {
  Celebrity
          .find()
          .then(allCelebrities => res.render('celebrities/celebrities',{allCelebrities}))
          .catch(err => console.log('Error while searching celebrities'))
});


router.get('/celebrities/new', (req, res, next) => {
  if(!req.user){
    req.flash('error','You need to log in to add a celebrity');
    res.redirect('/celebrities')
  }
  res.render('celebrities/new-celebrity');
});


router.post('/celebrities/create', (req, res, next) => {
  Celebrity
          .create(req.body)
          .then(newCelebrity => {
            req.flash('success','New celebrity succesfully added')
            res.redirect('/celebrities')
          })
          .catch(err => {
            console.log('Error while creating new celebrity',err)
          });        
});

router.get('/celebrities/:id', (req, res, next) => {
  if(!req.user){
    req.flash('error','please login to view actors profiles')
    res.redirect('/login')
  }
  Celebrity
          .findById(req.params.id)
          .populate('creator')
          .then(celebrity => res.render('celebrities/celebrity-details',{celebrity}))
          .catch(err => console.log('Error while retrieving details',err))
  
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity
          .findByIdAndRemove(req.params.id)
          .then(res.redirect('/celebrities'))
          .catch(err => {
            console.log('Error while deleting celebrity',err)
          });          
});

//Not needed because edition is done now through API and axios post
// router.get('/celebrities/:id/edit', (req, res, next) => {
//   Celebrity
//           .findById(req.params.id)
//           .then(celebrity => {
//             if(celebrity.creator.equals(req.user._id)){
//               res.render('celebrities/edit-celebrity',{celebrity})
//             }else{
//               req.flash('error','Sorry you can only edit your own celebrities');
//               res.redirect('/celebrities')
//             }
            
//           })
//           .catch(err => next(err))
  
// });

router.post('/celebrities/:id', (req, res, next) => {
  Celebrity
          .findByIdAndUpdate(req.params.id,req.body)
          .then(res.redirect('/celebrities'))
          .catch(err => {
            console.log('Error while updating celebrity',err)
          });          
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

// [GET] TO ADD A NEW CELEBRITY
router.get('/new', (req, res, next) =>
{
  res.render('celebrities/new');
});
// [POST] TO ADD A NEW CELEBRITY
router.post('/new', (req,res,next) => {
  const { name, occupation, catchPhrase} = req.body;
  const newCelebrity = new Celebrity({name,occupation,catchPhrase});
  console.log(newCelebrity.name + ' <==== the newCelebrity');
  if(newCelebrity.name && newCelebrity.occupation && newCelebrity.catchPhrase !== ""){
    newCelebrity.save()
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log(error);
      res.redirect('/celebrities/new');
    });
  }else{
    res.redirect('/celebrities/new');
  }
  
});
// [GET] TO LIST THE CELEBRITIES
router.get('/', (req, res, next) =>
{
  Celebrity.find().then(cel => {
    res.render('celebrities/index', {cel});
  })
  .catch(next);
});
// [GET] TO SHOW THE DETAILS OF THE CELEBRITY
router.get('/:id',(req,res,next) => {// <===== here the route already starts in /celebrities
  let celId = req.params.id;
  if(!req.params.id){
    console.log(celId + ' <====== this is what it found : celId');
    return res.status(404).render('not-found');
  }
  Celebrity.findById(celId)
  .then(celeb => {
    if(!celeb){
      console.log(celId + ' <====== this is what it found : celeb');
      return res.status(404).render('not-found');
    }
    console.log(celeb.name + ' <====== Celebrity');
    res.render('celebrities/show', {celeb});
  })
  .catch(next);
});
// [POST] TO DELETE THE CELEBRITY
router.post('/:id/delete', (req,res,next) => {
  let celId = req.params.id;
  Celebrity.findByIdAndRemove(celId)
  .then((celeb) => {
    if(!celeb) return res.status(404).render('not-found');
    console.log('===> Successful Deletion. <===');
    res.redirect('/celebrities');
  })
  .catch(next);
});
// [GET] TO EDIT THE CELEBRITY
router.get('/:id/edit', (req,res,next) => {
  let celId = req.params.id;
  if(!req.params.id){
    return res.status(404).render('not-found');
  }
  Celebrity.findById(celId)
  .then(celeb => {
    if(!celeb) return res.status(404).render('not-found');
    res.render('celebrities/edit', {celeb});
  })
  .catch((err) => {
    console.log(err);
  });
});
// [POST] TO EDIT THE CELEBRITY
router.post('/:id/edit', (req,res,next) =>{
  const { name, occupation, catchPhrase } = req.body;
  let celId = req.params.id;
  Celebrity.update( {_id: celId},{$set:{name,occupation,catchPhrase}},{new: true}) // <=====  ????
  .then((celeb) => {
    console.log(celeb.name);
    res.redirect('/celebrities');
  })
  .catch((err) => {
    console.log(err);
  });
});


module.exports = router;
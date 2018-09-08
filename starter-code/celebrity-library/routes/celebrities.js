const express = require('express');
const router  = express.Router();
const Celebrity    = require('../models/celebrity')


router.get('/celebrities', (req, res, next) => {

  Celebrity.find()
  .then((theData)=>{
      console.log('-------- got the cats ----------')
      res.render('famousCats', {listOfCats: theData})
  })
  .catch((err)=>{

  })
});

router.get('/celebrities/new', (req, res, next)=>{
  res.render('newCelebrity');
})

router.post('/celebrities/create', (req, res, next)=>{

  const catName = req.body.name;
  const catOccupation = req.body.occupation;
  const theCatchPhrase = req.body.catchPhrase;
  const thePhoto = req.body.photo;

   Celebrity.create({
       name: catName,
       occupation: catOccupation,
       catchPhrase: theCatchPhrase,
       photo:thePhoto,
   })
   .then((response)=>{
       res.redirect('/celebrities')
   })
   .catch((err)=>{
      next(err);
   })
})

router.post('/celebrities/delete/:id', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.id)
  .then((response)=>{
      res.redirect('/celebrities')
  })
  .catch((err)=>{
     next(err);
  })

})

router.get('/celebrities/edit/:id', (req, res, next)=>{
  Celebrity.findById(req.params.id)
  .then((catData)=>{
      res.render('editCatInfo', {theCat: catData});
  })
  .catch((err)=>{
      next(err);
  })
})

router.post('/celebrities/update/:id', (req, res, next)=>{
  const catName = req.body.name;
  const catOccupation = req.body.occupation;
  const theCatchPhrase = req.body.catchPhrase;
  const thePhoto = req.body.photo;

   Celebrity.findByIdAndUpdate(req.params.id, {
        name: catName,
        occupation: catOccupation,
        catchPhrase: theCatchPhrase,
        photo:thePhoto,
   })
   .then((response)=>{
       res.redirect('/celebrities/'+req.params.id)
   })
   .catch((err)=>{
      next(err);
   })

})

router.get('/celebrities/:id', (req, res, next)=>{
  Celebrity.findById(req.params.id)
  .then((thisCat)=>{
      console.log('----------got ONE cat ---------')
      console.log(thisCat)
      res.render('details', {theCat: thisCat})
  })
  .catch((err)=>{
    console.log('--****---- NO cat -----****----')
    next(err);
  })
})


module.exports = router;
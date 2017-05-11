const express = require('express');
const Celeb = require('../models/celeb');
// require the Drone model here

const router = express.Router();


router.get('/celeb', (req, res, next) => {
  // Iteration #2
  Celeb.find({}, (err, celebs) => {
     if (err) { return next(err) }

     res.render('celeb/index', {
       listofcelebs : celebs
     });
   });
 });

router.get('/celeb/new', (req, res, next) => {
  // Iteration #3
  res.render('celeb/new')
});

router.post('/celeb', (req, res, next) => {
  // Iteration #3
  const celebInfo ={
    celebName : req.body.Nameinput,
    celebOccup : req.body.Occupinput,
    celebPhrase : req.body.Phraseinput,
  };
 const newCeleb = new Celeb(celebInfo);

 newCeleb.save( (err) => {
    if (err) {
      return next(err)
    }
    return res.redirect('/celeb');
  });
});

//NEW STUFF




router.get('/celeb/:id', (req, res, next) => {
  const celebId = req.params.id;

   Celeb.findById(celebId, (err, celeb) => {
    if (err) { next(err); }
    res.render('celeb/show', { celeb: celeb });
  });

});

router.get('/celeb/:id/edit', (req, res, next) => {

  const celebId = req.params.id;

  Celeb.findById(celebId, (err, celeb) => {
    if (err) { next(err); }
    res.render('celeb/edit',{celeb: celeb});
  });
});

router.post('/celeb/:id', (req, res, next) => {
  const celebId = req.params.id;
  console.log(req);

  const updates = {
    celebName: req.body.celebName,
    celebOccup: req.body.celebOccup,
    celebPhrase: req.body.celebPhrase,
};
console.log(updates);
Celeb.findByIdAndUpdate(celebId, updates, (err, celeb) => {
  if (err){ return next(err); }
  console.log(celeb);
  return res.redirect('/celeb');
});
});

router.get('/celeb/:id/delete', (req, res, next) => {
  const id = req.params.id
  Celeb.deleteOne({ _id: id }, (err) => {
    if (err) { next(err) }
    res.redirect('/celeb')
  })
})

//NEW STUFF

module.exports = router;

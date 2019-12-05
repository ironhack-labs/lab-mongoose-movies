const express = require('express');
const router  = express.Router();
// import the model, you must have one MVC (model view controller per model)
const Celebrity = require('../models/celebrity'); 


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// get the the request from /celebrities and response with the render of the celebrities/show.hbs 
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((allCelebrities)=>{
    res.render('celebrities/show', {celebritiesArr: allCelebrities});
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities/new/save', (req, res, next)=>{
  let newCeleb = {...req.body}

  Celebrity.create(newCeleb)
  .then((response)=>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    next(err)
  })
});



// show individual celeb details
router.get('/celebrities/:celebID', (req, res, next)=>{
  let id = req.params.celebID;

  Celebrity.findById(id)
  .then((oneCeleb)=>{
    res.render('celebrities/details', {celeb: oneCeleb})
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/celebrities/edit/:celebID', (req, res, next)=>{
  let id = req.params.celebID;

  Celebrity.findById(id)
  .then((oneCeleb)=>{
    res.render('celebrities/edit', {celeb: oneCeleb})
  })
  .catch((err)=>{
    next(err);
  })
});


router.post('/celebrities/update/:id', (req, res, next)=>{
  let id = req.params.id;
  id = req.body.theID;
  // i put the ID in 2 places, you can do it either way


// i dont want you to blindly copy this route because it is fancy
// take a hard look at whats happening or, just cblindly copy and paste the commented code
  // Book.findByIdAndUpdate(id, {
  //   title: req.body.title,
  //   author: req.body.author,
  //   image: req.body.image
  // })
  let newInfo = {...req.body};
 
  
  
  // this stupid {new:true} thing is so that after we edit the book the response we get back shows us the new info isntead of the old info, not sure why this isnt the default
  Celebrity.findByIdAndUpdate(id, newInfo, {new: true})
  .then((response)=>{
    console.log(response)
    res.redirect('/celebrities/'+id)
  })
  .catch((err)=>{
    next(err)
  })
})



router.post('/celebrities/delete/:theID', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.theID)
  .then((response)=>{
    res.redirect('/celebrities');
  })
  .catch((err)=>{
    next(err)
  }) 

})



module.exports = router;

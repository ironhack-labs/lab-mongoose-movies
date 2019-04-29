const express = require('express');
const router = express.Router();
const celebrities = require('../models/celebrities');

//Get names
router.get('/celebrities', (req,res,next) =>{ 
  celebrities.find(req.query.name).then( celebrities =>{  
    console.log(celebrities)
    res.render('celebrities/index', {celebrities}) 
  })
})

//Get each celebrity

router.get('/views/celebrities/show/:identification', (req,res,next) =>{ 
  celebrities.findById(req.params.identification).then( celebrities =>{  
    console.log(celebrities)
    res.render('celebrities/show', {celebrities}) 
  })
  .catch ((error)=>{
    console.log("Error");
  })
})

//New
router.post('/views/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new celebrity({ name, occupation, catchPhrase});
  newCelebrity.save()
  .then((celebrities) => {
    console.log('Saved!')
    res.redirect('celebrities/new');
  })
  .catch((error) => {
    console.log(error);
  })
});


router.get('/views/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
})



router.get("/celebrities/delete", (req, res, next) => {
  celebrities.findByIdAndRemove(req.query.celebrity_id)
    .then((celebrities) => {
      res.redirect("/celebrities");
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;




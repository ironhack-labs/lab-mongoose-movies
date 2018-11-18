const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;


/* GET Celebrities list  */


router.get('/celebrities', (req,res,next) => {
   Celebrity.find()
    .then(celebrities => {
       res.render('celebrities/index', {celebrities});
    })
    .catch(next)

})



/* GET form new celebrity */

router.get('/celebrities/new',(req,res,next) =>{
  res.render('celebrities/new');
})

/* GET specicy celebritie */

router.get('/celebrities/:id', (req,res,next) =>{
  let celebritieId = req.params.id;

  Celebrity.findOne({'_id':celebritieId})
    .then(celebrity =>{
        res.render('celebrities/show', celebrity);
    })
    .catch(next)
})



/* POST create new Celebrity */

router.post('/celebrities', (req,res,next) => {
  
   var objCelebrity = {
     name: req.body.name,
     occupation: req.body.occupation,
     catchPhrase: req.body.catchPhrase
   }

   console.log(objCelebrity);

   const newCelebrity = new Celebrity();

   newCelebrity.name = objCelebrity.name;
   newCelebrity.occupation = objCelebrity.occupation;
   newCelebrity.catchPhrase = objCelebrity.catchPhrase;

   newCelebrity.save()
    .then(()=>{
      res.redirect('/celebrities');
    })
    .catch(()=>{
      req.redirect('/celebrities');
    })
})
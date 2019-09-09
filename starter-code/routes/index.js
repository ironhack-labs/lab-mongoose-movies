const express = require('express');
const router  = express.Router();
/* GET home page */
router.get('/', (req, res, next) => {
 res.render('index');
});


// Get all celebrities 

const Celebrity = require('./../models/celebrity')
router.get('/celebrities', (req, res, next) =>{
 Celebrity.find()
   .then((celebrities) => {
     const data = {
       celebrities
     }
     res.render('celebrities', data);
     console.log('Celebrities successfully found!', data);
   })
   .catch((error) => {
     console.log('Error accessing celebrities database')
   })
})



// Getting celebrity by ID

router.get('/celebrities/:celebrityId', (req, res, next) => {
 const celebrityId = req.params.celebrityId;
 Celebrity.findById(celebrityId)
   .then(celebrityItem => {
     if (!celebrityItem) {
       next(new Error('Celebrity not found'));
     } else {
       const data = {
       celebrityItem
     };
     res.render('celebrity', data);
     }
   })
   .catch(error => {
     next(error);
   })
});





module.exports = router;

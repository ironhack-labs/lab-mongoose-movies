const express = require('express');
const router = express.Router();
const Celebrity = require('./models/celebrity');



/* GET movies page */
router.get('/', (req, res, next) => {
    Celebrity.find({}, {name: 1, occupation: 1, catchPhrase: 1})
    .then((celebrity) => {
      console.log(celebrity)
      res.render('movies', {celebrity});
      
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })
    
  })

router.get('/details/:id', (req, res, next)=>{
  const movieID = req.params.id;
  Movie.findById(movieID)
  .then((result)=>{
      res.render('singleMovie', result);
  })
  .catch((error)=>{
      res.send(error);
  });
});



  
module.exports = router;

const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* C(R)UD: Retrieve -> Listing Our Celebrities */
router.get('/celebrities',(req, res, next)=> {
  Celebrity.find({}).then(celebrities => {
    res.render('celebrities',{celebrities});
  })
    .catch(error => {
      console.log(error)
  })
})

module.exports = router;

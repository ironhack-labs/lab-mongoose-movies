const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity');

/* GET Celebrity List */
router.get('/', (req, res) =>{
  Celebrity.find().then((celebrities) => {
    // res.send(celebrities);
    res.render('./celebrities/index',{celebrities});
  })
  .catch(error => {
    res.send(error)
  });
}); 

module.exports = router;
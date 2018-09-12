const express = require('express');
const router  = express.Router();


router.get('/axios/', (req, res, next) => {
  res.render('axios/index')
})

module.exports = router;

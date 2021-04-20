const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity.model")

/* GET home page */
router.get('/:celebId', (req, res, next) => {
  const {celebId} = req.params;
  Celebrity.findById(celebId)
  .then(celebrity => {
    res.status(200).render("celebrities/show", {celebrity} )
  }).catch(error => {
    console.error('Error while getting the movies from the DB: ', error);
    next(error);
})
  
});

module.exports = router;
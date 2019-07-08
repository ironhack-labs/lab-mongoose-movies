const express = require('express');
const router  = express.Router();
const Celebs = require('../models/celebrity');

/* delete new celeb */
router.post('/edit/:id', (req, res, next) => {
  console.log(req.params.id), req.body;
    Celebs.findByIdAndUpdate(req.params.id, req.body)
    .then((data)=>{
      res.redirect('/celebrities');
      console.log("The received data from the DB: ", data);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = router;
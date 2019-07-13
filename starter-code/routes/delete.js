const express = require('express');
const router  = express.Router();
const Celebs = require('../models/celebrity');

/* delete new celeb */
router.post('/delete/:id', (req, res, next) => {
    Celebs.findByIdAndRemove(req.params.id)
    .then((data)=>{
      res.redirect('/celebrities');
      console.log("The received data from the DB: ", data);
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = router;
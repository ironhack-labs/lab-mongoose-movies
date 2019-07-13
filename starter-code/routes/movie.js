const express = require('express');
const router  = express.Router();
const Movies = require('../models/movies');
const Celebs = require('../models/celebrity');

/* GET celebs page */
router.get('/movie/:id', (req, res, next) => {
    Movies.findById(req.params.id).populate('actor')
    .then((data)=>{
      Celebs.find()
        .then((celebData)=>{
          celebData.forEach((celeb)=>{
            if(celeb.name === data.actor.name){
              celeb.selected = true;
            }
          });
          res.render('movie', {movie: data, actors: celebData});
        })
        .catch(()=>{
          console.log("The received data from the DB: ", data);
        });
    })
    .catch((err)=>{
      next(err);
    });
});

module.exports = router;
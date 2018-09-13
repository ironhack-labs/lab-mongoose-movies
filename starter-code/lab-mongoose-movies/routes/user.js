

const express = require('express');
const router  = express.Router();
const User = require("../models/User");
// const Celebrity   = require('../models/Celebrity')
 const Movie   = require('../models/Movie')
 const ensureLogin = require("connect-ensure-login");



/* GET /user Info page */
router.get('/user', ensureLogin.ensureLoggedIn("/login"), (req, res, next) => {

  User.findById(req.user._id)
  .then((oneUser)=>{
      console.log(oneUser);
      res.render('users/user', {oneUser: oneUser})
  })
  .catch((err)=>{
      next(err);
  })
});


/* GET movies page */
router.get('/users/movies', ensureLogin.ensureLoggedIn("/login"), (req, res, next) => {

  Movie.find( {creator: req.user._id} )
  .then((movieData)=>{

    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=', movieData );

      res.render('users/movies', {movieData: movieData})
  })
  .catch((err)=>{
      next(err);
  })

});


module.exports = router;


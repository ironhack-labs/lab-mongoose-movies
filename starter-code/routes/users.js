const express   = require('express');
const router    = express.Router();

const User    = require('../models/User');
const bcrypt  = require('bcryptjs');

router.get('/signup', (req, res, next) => {

    res.render('users/signup');

});

router.post('/signup', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    const salt  = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    User.create({
        username: username,
        password: hash
    })
    .then(()=>{
        res.redirect('/')
    })
    .catch((err)=>{
        next(err)
    })
});

router.get('/login', (req, res, next) => {

  res.render('users/login');

});

router.post('/login', (req, res, next) => {
    let currentUser = req.body.username;
    let password = req.body.password;

    const salt  = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    

    User.findOne({username: currentUser})
    .then(user=> {
      if(!user) {
        res.redirect('/');
      } if (bcrypt.compareSync(password, user.password)) {
          req.session.currentUser = user;
          res.redirect('/favorites');
      } else {
         res.redirect('/');
      }
    })
    .catch(err => {
      next(err);
    })
});

router.get('/logout', (req, res, next) => {

    req.session.destroy();
    res.redirect('/');

});

router.get('/favorites', (req, res, next) => {

  res.render('movies/favorites');

})
module.exports = router;
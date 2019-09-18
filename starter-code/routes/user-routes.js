const express = require('express');
const router  = express.Router();

const User    = require('../models/User');
const bcrypt  = require('bcryptjs');

router.get('/signup', (req, res, next)=>{
    res.render('user-views/signup')
})

router.post('/signup', (req, res, next)=>{
    const username = req.body.theUsername;
    const password = req.body.thePassword;

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
})

router.get('/login', (req, res, next)=>{

    res.render('user-views/login')

})

router.post('/login', (req, res, next)=>{
    const username = req.body.theUsername;
    const password = req.body.thePassword;

User.findOne({ username: username })
  .then(userfromDB => {
      if (!userfromDB) {
        res.redirect('/');
      }
      if (bcrypt.compareSync(password, userfromDB.password)) {
        req.session.currentuser = userfromDB;
        res.redirect("/");
      } else {
          res.redirect('/')
      }
  })
  .catch(error => {
    next(error);
  })
})

router.post('/logout', (req, res, next)=>{
    req.session.destroy();
    res.redirect('/');
})

router.get('/secret', (req, res, next)=>{
    if(req.session.currentuser){
        res.render('user-views/secret', {theUser: req.session.currentuser})
    } else{
        res.redirect('/')
    }
})

module.exports = router;
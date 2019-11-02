const express = require('express');
const router  = express.Router();

const User           = require("../models/User.js");


router.use((req, res, next)=>{
  if(!req.user){
    req.flash('error', 'Please log in')
    res.redirect('/login')
  }
  if(!req.user.isAdmin){
    req.flash('error', 'You do not have access to this feature')
    res.redirect('/')
    
  }
  next();
})


router.get('/create-new-account', (req, res, next)=>{
  res.render('auth/create-new-user.hbs')

})

router.get('/active-users', (req, res, next)=>{
  User.find()
  .then((result)=>{
    res.render('auth/active-users', {result})
  })
  .catch((err)=>{
    next(err)
  })
})

router.post('/admin/delete/:idThing', (req, res, next)=>{
  User.findByIdAndRemove(req.params.idThing)
  .then((result)=>{
    req.flash('success', 'account succesfully deleted')
    res.redirect('/active-users')
  })
  .catch((err)=>{
    next(err)
  })
})

module.exports = router;
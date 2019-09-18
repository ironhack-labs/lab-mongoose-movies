const express     = require('express')
const router      = express.Router();

const bcrypt     = require("bcryptjs");
// const saltRounds = 10;


// const salt  = bcrypt.genSaltSync(saltRounds);
// const hash = bcrypt.hashSync(password, salt);

// console.log("Hash -", hash);



router.get('/signup', (req,res,next) => {
  res.render('users/signup')
})

router.post('/signup', (req,res,next) => {
    console.log(req.body)
  res.redirect("/user/login")
})

router.get('/login', (req, res, next) => {
  res.render("users/login")
})

router.post('/login', (req, res, next) => {
  console.log(req.body)





  
  res.render("users/login")
})


router.get('/logout', (req, res, next) => {
  res.render('users/logout')
})







module.exports = router;



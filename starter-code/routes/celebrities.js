const mongoose     = require('mongoose');
const express      = require('express')
const router       = express.Router();
const Celebrity    = require('../models/Celebrity');

router.get('/celebrities', (req, res, next) => {

  Celebrity.find()
.then((allCelebrities)=>{

  res.render('index', {theCelebs: allCelebrities});

})
.catch((err)=>{
  next(err);
})

  //res.render('celebrities')
})

router.get('/celebrities/:id', (req, res, next)=>{

  Celebrity.findById(req.params.id)

  .then((theCelebrity)=>{
    res.render('show', {celeb: theCelebrity})

  })
.catch((err)=>{
  next(err)
})
})

router.get('/new', (req, res, next)=>{
  res.render('new')
})




router.post('/celeb/create', (req, res, next)=>{
  Celebrity.create(req.body)
  .then((x)=>{
    console.log(x)
    res.redirect('/new')

   })
   .catch((err)=>{
    next(err);
   })

})

router.post('/celeb/:id/delete', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    next(err)
  })
})


router.get('/celeb/:id/edit', (req, res, next)=>{
  Celebrity.findById(req.params.id)
  .then((theCelebrity)=>{
    res.render('edit', {celeb: theCelebrity})
  })
  .catch((err)=>{
    next(err)
  })

})

// router.get('/edit', (req, res, next)=>{
//   res.render('edit')
// })

router.get('/signup', (req, res, next) => {
  res.render('signup');
});




router.post('/signup', (req, res, next)=>{


  const theUserName = req.body.theUserName;
  const thePassWord = req.body.thePassWord;

  if (theUserName === "" || thePassWord === "") {
      res.render("signup", {errorMessage: "Indicate a username and a password to sign up"});
      return;
    }


    User.findOne({username: theUserName })
      .then(user => {
              if (user !== null) {
                  res.render("signup", {
                      errorMessage: "Sorry, that username is awesome so obviously it's taken!"
                  });
                  return;
                  }
      


          const salt     = bcrypt.genSaltSync(bcryptSalt);
          const hashPass = bcrypt.hashSync(thePassWord, salt);


          User.create({username: theUserName, password: hashPass})
          .then(()=>{
              res.redirect('/');
          })
          .catch((err)=>{
              next(err);
  })

  
  });// end .then for User.findOne
});

























module.exports = router;
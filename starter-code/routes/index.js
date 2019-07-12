const express = require('express');
const router  = express.Router();
const Celeb = require('../model/Celebrity');
const Movie = require('../model/Movies')
const User  = require("../model/user");
const uploadCloud = require('../config/cloudinary.js');
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const ensureLogin = require("connect-ensure-login");
const flash      = require("connect-flash");





//Session Login
// router.use((req, res, next) => {
//   if (req.session.currentUser) { 
//     next(); 
//   } else {                       
//     res.redirect("/login");        
//   }                              
// });    



/* GET home page */
router.get('/', ensureLogin.ensureLoggedIn("/login"), (req, res, next) => {
  res.render('index');
});

//All Celebs //Passport Session Routes
router.get('/celebrities', ensureLogin.ensureLoggedIn("/login"), (req, res, next)=>{
  Celeb.find()
  .then((data)=>{
    res.render('celebrities/index',{data})
  })
  .catch((err)=>{
    next(err);
  })
})

//Single Celebs
router.get('/celebrities/show/:id',ensureLogin.ensureLoggedIn("/login"),  (req, res, next)=>{

  let celebid = req.params.id;
  Celeb.findById(celebid)
  .then((singleCeleb)=>{

    res.render('celebrities/show', {singleCeleb})

  })
  .catch((err)=>{
    next(err);
  })

})

//Celeb New Form
router.get('/celebrities/new',ensureLogin.ensureLoggedIn("/login"),  (req, res, next) => {
  res.render('celebrities/new');
});



//Inserts New Celeb Item
router.post('/celebrities',ensureLogin.ensureLoggedIn("/login"),  (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  if (!name || !occupation || !catchPhrase) {
    
    return res.status(400).json({ msg: 'Please include a name, email and catchPhrase' });
   }

  const CelebMod = new Celeb ({name, occupation,catchPhrase});
 CelebMod.save()
 .then((celebObj)=>{
  req.flash('success', " Celebrity Entry Created");
   res.redirect('/celebrities');
}) .catch((err)=>{
  next(err);
})


});

//Deletes Celeb Entry
router.post('/celebrities/delete/:id',ensureLogin.ensureLoggedIn("/login"),  (req, res, next)=>{

  let celebid = req.params.id;
  Celeb.findByIdAndRemove(celebid)
  .then(()=>{

    req.flash('success', "Entry Deleted");

   res.redirect('/celebrities');

  })
  .catch((err)=>{

    next(err);
   
  })

})

//Update Celebs Form
router.get('/celebrities/edit/:id',ensureLogin.ensureLoggedIn("/login"),  (req, res, next)=>{
  Celeb.findById(req.params.id)
  .then((celebEdit)=>{
          res.render('celebrities/edit', {celeb: celebEdit})
  })
  .catch((err)=>{
      next(err);
  })
})

//Update Celeb Entry
router.post('/celebrities/update/:id',ensureLogin.ensureLoggedIn("/login"),  (req, res, next)=>{
  let celebid = req.params.id;
  Celeb.findByIdAndUpdate(celebid, req.body)
  .then((CelebrityUpdate)=>{
    req.flash('success', "Entry Updated");

      res.redirect('/')
  })
  .catch((err)=>{
      next(err);
  })
})



module.exports = router;

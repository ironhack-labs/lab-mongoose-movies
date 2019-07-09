const express = require('express');
const router  = express.Router();
const Celeb = require('../model/Celebrity');
const Movie = require('../model/Movies')
const User  = require("../model/user");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//All Celebs
router.get('/celebrities/index', (req, res, next)=>{
  Celeb.find()
  .then((data)=>{
    res.render('celebrities/index',{data})
  })
  .catch((err)=>{
    next(err);
  })
})

//Single Celebs
router.get('/celebrities/show/:id', (req, res, next)=>{

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
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});



//Inserts New Celeb Item
router.post('/celebrities', (req, res) => {
  const {name, occupation, catchPhrase} = req.body;
  const CelebMod = new Celeb ({name, occupation,catchPhrase});
 CelebMod.save()
 .then((newceleb)=>{

   res.redirect('/');
 })

  if (!newCeleb.name || !newCeleb.email || !newCeleb.catchPhrase) {

    return res.status(400).json({ msg: 'Please include a name, email and catchPhrase' });
  }

});

//Deletes Celeb Entry
router.post('/celebrities/delete/:id', (req, res, next)=>{

  let celebid = req.params.id;
  Celeb.findByIdAndRemove(celebid)
  .then(()=>{

   res.redirect('/');

  })
  .catch((err)=>{

    next(err);
   
  })

})

//Update Celebs Form
router.get('/celebrities/edit/:id', (req, res, next)=>{
  Celeb.findById(req.params.id)
  .then((celebEdit)=>{
          res.render('celebrities/edit', {celeb: celebEdit})
  })
  .catch((err)=>{
      next(err);
  })
})

//Update Celeb Entry
router.post('/celebrities/update/:id', (req, res, next)=>{
  let celebid = req.params.id;
  Celeb.findByIdAndUpdate(celebid, req.body)
  .then((CelebrityUpdate)=>{
      res.redirect('/')
  })
  .catch((err)=>{
      next(err);
  })
})



//Get All Movies
router.get('/movies/index', (req, res, next)=>{
  Movie.find()
  .then((data)=>{
    res.render('movies/index',{data})
  })
  .catch((err)=>{
    next(err);
  })
})

//Get Single Movie
router.get('/movies/movieInfo/:id', (req, res, next)=>{

  let movieid = req.params.id;
  Movie.findById(movieid).populate('aStar')
  .then((singleMovie)=>{

    res.render('movies/movieinfo', {singleMovie})

  })
  .catch((err)=>{
    next(err);
  })

})

//Add New Movie Form
router.get('/movies/addnew', (req, res, next)=>{    
  Celeb.find()
  .then((allCelebs)=>{
      res.render('movies/addnew', {allCelebs})
  })
  .catch((err)=>{
      console.log(err);
      next(err);
  })
})


//New Movie Item 
router.post('/movies', (req, res) => {
  const {title, aStar, genre, plot} = req.body;
  const movieModel = new Movie ({title,aStar,genre,plot});
  console.log(movieModel);
 movieModel.save()
 .then((insertMovie)=>{

   if (!insertMovie.title || !insertMovie.plot || !insertMovie.genre) {
  
     return res.status(400).json({ msg: 'Please include a name, email and catchPhrase' });
   }
   res.redirect('/');
 })


});


//Delete Movies

router.post('/movies/remove/:id', (req, res, next)=>{

  let movieId = req.params.id;
  Movie.findByIdAndRemove(movieId)
  .then(()=>{

   res.redirect('/');

  })
  .catch((err)=>{

    next(err);
   
  })

})

//Update Movie view Two variables for the view
router.get('/movies/editMovies/:id', (req, res, next)=>{
  Movie.findById(req.params.id)
  .then((mEdit)=>{
          // res.render('movies/editMovies', {mEdit})
          Celeb.find()
          .then((theCeleb)=>{
            res.render('movies/editMovies', {theCeleb, mEdit})
          })
        })
        .catch((r)=>{
          next(r)
        })
  .catch((err)=>{
      next(err);
  })
})

//Update Movie Entry
router.post('/movies/updateMovie/:id', (req, res, next)=>{
  let movieID = req.params.id;
  Movie.findByIdAndUpdate(movieID, req.body)
  .then((movieUpdate)=>{
      res.redirect('/')
  })
  .catch((err)=>{
      next(err);
  })
})


router.get('/movies/allactormovies', (req, res, next)=>{
  Movie.find({name: req.params.name})
  .then((data)=>{
    console.log(data[0])
    res.render('movies/allactormovies',{name:data[0]})
  })
  .catch((err)=>{
    next(err);
  })
})

//Password Ecryption
// BCrypt to encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const salt     = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

User.findOne({ "username": username })
.then(user => {
  if (user !== null) {
      res.render("auth/signup", {
        errorMessage: "The username already exists!"
      });
    }
  })

  User.create({
    username,
    password: hashPass
  })
    .then((user) => {
      if (user !== null) {
          res.render("auth/signup", {
            errorMessage: "The username already exists!"
          })
      }
  })

  .then(() => {
    if (username =='' || password =='') {
      res.render("auth/signup", {
        errorMessage: "Indicate a username and a password to sign up"
      })
     } else{

        res.redirect("/");
      }
  })

  .catch(error => {
    console.log(error);
  })
  .catch(err => {
    console.log(err);
  })
});

router.post("/auth/login", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;


});

module.exports = router;

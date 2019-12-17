const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');
const MMovie   = require('../models/MMovie');

// router.get('/:id', async (req, res, next)=>{
//   try{ 
//       let celebrity = await Celebrity.findById(req.params.id)
      
//       let movies = await MMovie.find({celebrity: req.params.id})

//       res.render('author-views/details', {author, books})

//   }catch(err){
//       next(err);
//   }
// })

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then((allThecelebrities)=>{

    if(req.session.currentUser){ 
      allThecelebrities.forEach((thisCelebrity)=>{
        if(req.session.currentUser.admin){
          thisCelebrity.isMine = true;
        }
      })
    }

    res.render('celebrities/celebrities', {theCelebrities: allThecelebrities});
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/movies', (req, res, next) => {
  MMovie.find().populate('celebrity')
  .then((allThemovies)=>{

    if(req.session.currentUser){ 
      allThemovies.forEach((thisMovie)=>{
        if(req.session.currentUser.admin){
          thisMovie.isMine = true;
        }
      })
    }

    res.render('movies/movies', {theMovies: allThemovies});
  })
  .catch((err)=>{
    next(err);
  })
});


router.get('/add-new-celebrity', (req, res, next)=>{
  res.render('celebrities/new-celebrity');
})

router.get('/add-new-movie', (req, res, next)=>{
  if(!req.session.currentUser){
    res.redirect('/login');
    return;
  }
  Celebrity.find()
  .then((allCelebrities)=>{
    res.render('movies/new-movie', {allCelebrities});
    //                            ^ this is the same as {allAuthors:allAuthors}
  })
  .catch((err)=>{
    next(err)
  })
})

router.post('/create-celebrity', (req, res, next)=>{
  if(!req.session.currentUser){
    res.json({message: 'sorry hacker, not allowed'})
    return;
  }
  let theName = req.body.theCelebrityName;
  let theOccupation = req.body.theOccupation;
  let theCatchPhrase = req.body.theCatchPhrase;


  Celebrity.create({
    name: theName,
    occupation: theOccupation,
    catchPhrase: theCatchPhrase
  })
  .then((result)=>{
    // its because you named the placeholder res
    // when you name it res, you are highjacking the word res and redifining it so you no longer have access to res.redirect
    res.redirect('/')
  })
  .catch((err)=>{
    next(err)
  })

})

router.post('/create-the-movie', (req, res, next)=>{
  if(!req.session.currentUser){
    res.json({message: 'sorry hacker, not allowed'})
    return;
  }

  let theTitle = req.body.theNewMovieTitle;
  let theGenre = req.body.theGenre;
  let theImage = req.body.theImage;
  let thePlot = req.body.thePlot;
  let auth = req.body.theCelebrityForNewMovie;


  MMovie.create({
    title: theTitle,
    genre: theGenre,
    image: theImage,
    plot: thePlot,
    celebrity: auth
  })
  .then((result)=>{
    res.redirect('/')
  })
  .catch((err)=>{
    next(err)
  })

})


router.get('/movies/:theIdOfTheMovie', (req, res, next)=>{
  let id = req.params.theIdOfTheMovie;

  MMovie.findById(id).populate('celebrity')
  .then((theMovie)=>{
    res.render('movies/single-movie', {movie: theMovie})
  })
  .catch((err)=>{
    next(err);
  })
})



router.get('/celebrities/edit/:celebritiesTheID', (req, res, next)=>{

  Celebrity.findById(req.params.celebritiesTheID)
  .then((theCelebrity)=>{
    if(!req.session.currentUser.admin){
      res.redirect('/login')
      return
    }

    res.render('celebrities/edit', {theActualCelebrity: theCelebrity})

  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/movies/edit/:moviesTheID', (req, res, next)=>{

  MMovie.findById(req.params.moviesTheID)
  .then((theMovie)=>{
    if(!req.session.currentUser.admin){
      res.redirect('/login')
      return
    }

    res.render('movies/edit', {theActualMovie: theMovie})

  })
  .catch((err)=>{
    next(err);
  })
})


router.post('/celebrities/update/:id', (req, res, next)=>{

  if(!req.session.currentUser.admin){
    res.json({message: "Unauthorized Injection"})
    return;
  }

  let id = req.params.id;
  id = req.body.theID;
  // i put the ID in 2 places, you can do it either way


// i dont want you to blindly copy this route because it is fancy
// take a hard look at whats happening or, just cblindly copy and paste the commented code
  // Celebrity.findByIdAndUpdate(id, {
  //   name: req.body.name,
  //   occupation: req.body.occupation,
  //   catchPhrase: req.body.catchPhrase
  // })
  let update = {...req.body};  
  
  // this stupid {new:true} thing is so that after we edit the book the response we get back shows us the new info isntead of the old info, not sure why this isnt the default
  Celebrity.findByIdAndUpdate(id, update, {new: true})
  .then((response)=>{
    console.log(response)
    res.redirect('/celebrities/'+id)
  })
  .catch((err)=>{
    next(err)
  })
})

router.post('/movies/update/:id', (req, res, next)=>{
  if(!req.session.currentUser.admin){
    res.json({message: "Unauthorized Injection"})
    return;
  }
  let id = req.params.id;
  id = req.body.theID;
  let update = {...req.body};

  MMovie.findByIdAndUpdate(id, update, {new: true})
  .then((response)=>{
    console.log(response)
    res.redirect('/movies/'+id)
  })
  .catch((err)=>{
    next(err)
  })
})



router.post('/celebrities/delete/:theID', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.theID)
  .then(()=>{
    res.redirect('/');
  })
  .catch((err)=>{
    next(err)
  })

})

router.post('/movies/delete/:theID', (req, res, next)=>{
  MMovie.findByIdAndRemove(req.params.theID)
  .then(()=>{
    res.redirect('/');
  })
  .catch((err)=>{
    next(err)
  })

})




module.exports = router;

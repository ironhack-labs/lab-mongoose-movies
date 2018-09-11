const express = require('express');
const router  = express.Router();
const Celebrity    = require('../models/celebrity')
const Movie    = require('../models/movie')


router.get('/celebrities', (req, res, next) => {

  Celebrity.find()
  .then((theData)=>{
      console.log('-------- got the cats ----------')
      res.render('famousCats', {listOfCats: theData, theUser: req.session.currentUser})
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/celebrities/new', (req, res, next)=>{
    if(!req.session.currentUser){
        res.redirect('/celebrities')
        return
    }
    Movie.find().then((movieData)=>{
        res.render('newCelebrity', {theMovies: movieData});
    }).catch((err)=>{
        next(err);
    })
});

router.post('/celebrities/create', (req, res, next)=>{

  // you can just pass the variables directly to the object below: 
     Celebrity.create(req.body)
     .then((response)=>{
         res.redirect('/celebrities')
     })
     .catch((err)=>{
        next(err);
     })
  })
// router.post('/celebrities/create', (req, res, next)=>{

//   const catName = req.body.name;
//   const catOccupation = req.body.occupation;
//   const theCatchPhrase = req.body.catchPhrase;
//   const thePhoto = req.body.photo;
// // you can just pass the variables directly to the object below: 
//    Celebrity.create({
//        name: catName,
//        occupation: catOccupation,
//        catchPhrase: theCatchPhrase,
//        photo:thePhoto,
//    })
//    .then((response)=>{
//        res.redirect('/celebrities')
//    })
//    .catch((err)=>{
//       next(err);
//    })
// })

router.post('/celebrities/delete/:id', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.id)
  .then((response)=>{
      res.redirect('/celebrities')
  })
  .catch((err)=>{
     next(err);
  })

})

router.get('/celebrities/edit/:id', (req, res, next)=>{
  Celebrity.findById(req.params.id)
  .then((catData)=>{
      Movie.find().then((movieData)=>{
          res.render('editCatInfo', {theCat: catData, theMovies: movieData});

      }).catch((err)=>{
      });
  })
  .catch((err)=>{
      next(err);
  })
})

router.post('/celebrities/update/:id', (req, res, next)=>{
//   const catName = req.body.name;
//   const catOccupation = req.body.occupation;
//   const theCatchPhrase = req.body.catchPhrase;
//   const thePhoto = req.body.photo;
   Celebrity.findByIdAndUpdate(req.params.id, req.body
//   {      name: catName,
//         occupation: catOccupation,
//         catchPhrase: theCatchPhrase,
//         photo:thePhoto,
//    }
)
   .then((response)=>{
       if (req.body.movies > []) {
           for (let i=0; i<req.body.movies.length; i++){
            Movie.findById(req.body.movies[i]).then((thisMovie)=>{
                console.log('movie to be edited:   ',thisMovie);
                const theStars = thisMovie.stars;
                theStars.push(req.params.id)
                Movie.findByIdAndUpdate(req.body.movies[i], {stars:theStars} ).then((updatedMovie)=>{
                    console.log('updated movie:   ',updatedMovie)
                }).catch((err)=>{console.log(err)})
            }).catch((err)=>{console.log(err)})
           }
       }
       res.redirect('/celebrities/'+req.params.id)
   })
   .catch((err)=>{
      next(err);
   })

})

router.get('/celebrities/:id', (req, res, next)=>{
  Celebrity.findById(req.params.id).populate('movies') //.populate('keyThatIwantToPopulate')
  .then((thisCat)=>{
      console.log('----------got ONE cat ---------')
      console.log(thisCat)
      res.render('details', {theCat: thisCat})
  })
  .catch((err)=>{
    console.log('--****---- NO cat -----****----')
    next(err);
  })
})


module.exports = router;
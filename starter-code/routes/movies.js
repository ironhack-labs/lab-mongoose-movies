const express = require('express');
const movieRouter  = express.Router();
const Movie = require('../models/Movie');
const Celebrity = require('../models/Celebrity');
 
movieRouter.post('/movies/:id', (req, res, next) => {

  console.log('POST movies/:id  inside router..' );
   Movie.findByIdAndUpdate(req.params.id, req.body)
      .then((thingFromDB)=>{

        // res.redirect('/celebrities/' + req.params.id );
        res.redirect('/movies');

      })
      .catch((err)=>{
        console.log(err);
        next(err);
      });
});

movieRouter.get('/movies/:id/edit', (req, res, next) => {
  console.log('you are in movie edit route..');

    Movie.findById(req.params.id)
      .then((moviex)=>{
          // find all celebrities for select tag
            Celebrity.find()
            .then((allCelebritiesFromDB)=>{
              console.log("celebrities id from movie " + moviex.celebrity );
              // console.log("celebrities id from movie " + allCelebritiesFromDB[0]._id );

              let selectedName = ""
                allCelebritiesFromDB.forEach( (ele)=>{
                  // console.log("type of movie id  " + moviex.celebrity.toString());
                  console.log("type of ele id  " + ele._id.toString() );
                  const areEqual = moviex.celebrity.equals(ele._id);
                  console.log("are equals : " + areEqual);
                  if (areEqual){
                    selectedName = ele.name;
                  }
                 });
               const allCelebritiesMinusSelected =  allCelebritiesFromDB.filter( (ele)=>{
                // console.log("type of movie id  " + moviex.celebrity.toString());
                console.log("type of ele id  " + ele._id.toString() );
                const areEqual = moviex.celebrity.equals(ele._id);
                console.log("are equals : " + areEqual);
                 return !moviex.celebrity.equals(ele._id);
               });
                
                //  console.log(" filtered  " + JSON.stringify( allCelebritiesMinusSelected)) ;

              res.render('movies/edit', {themoviex:moviex, 
                                          allCelebritiesMinusSelected: allCelebritiesMinusSelected,
                                          selectedName:selectedName});

            });
          //
          
      })
      .catch((err)=>{
        console.log('error ' + err);
        next(err);
      });
});


movieRouter.post('/movies/:id/delete', (req, res, next) => {
  console.log("you are delete in movies /delete  route");
  Movie.findByIdAndRemove(req.params.id)
    .then(()=>{
      res.redirect('/movies');
    })
    .catch((err)=>{
      console.log(err);
      next(err);
    });

    
});

movieRouter.get('/movies/new', (req, res, next) => {
  console.log("you are in celebreties/new GET route");

    // find all celebrities for select tag
    Celebrity.find()
    .then((allCelebritiesFromDB)=>{
      console.log("celebrities from db from new route is:   " + allCelebritiesFromDB);
          res.render('movies/new',{allCelebrities: allCelebritiesFromDB})
            .catch((err)=>{
              console.log(err);
              next(err);
            });

    });
  //
    
  
});

movieRouter.post('/movies', (req, res, next) => {
  console.log("you are POST in celebreties/new  route");

    const newMOvie = new Movie( req.body);

    newMOvie.save()
      .then((moviex)=>{
        res.redirect('movies')
      })
      .catch((err)=>{
        console.log(err);
        res.redirect('movies/new',{
          errorMessage: "Error when adding movie to DB try again!"
        });
        next(err);
      });
});

movieRouter.get('/movies/:id', (req, res, next) => {

  console.log('GET movies/:id  inside router..' );
  Movie.findById(req.params.id)
  .then((thingFromDB)=>{

    res.render('movies/show',{theMovie :thingFromDB});
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  });
});


movieRouter.get('/movies', (req, res, next) => {
  Movie.find().populate('celebrity')
  .then((thingFromDB)=>{

    res.render('movies',{allTheMovies:thingFromDB});
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  });
});




module.exports = movieRouter;

const express = require('express');
const router  = express.Router();
const movieModel=require("./../models/movie.js")

console.log("i am inside movies.js")

router.get('/', (req, res, next) => {
    movieModel.find()
    .then((dbRes)=>{
        res.render('movies/index',{movies:dbRes});
    })
    .catch((err)=>{
        console.log("couldnot list the movies")
    })
        
  });

  router.get('/newmovie', (req, res, next) => {

    res.render('../views/movies/newmovie');
  });

  router.get('/:id', (req, res,next) => {
    console.log(req.params)
  
      movieModel.findById(req.params.id).then(dbRes => {
        // console.log(dbRes)
          res.render('movies/show', { movie: dbRes });
        })
        .catch(dbErr => {
          console.log("this is not working")
        })
    
    });



    router.post('/', (req, res,next) => {

        const newMovie=new movieModel({
          title:req.body.title,
          genre:req.body.genre,
          plot:req.body.plot
        })
        .save()
        .then((dbRes)=>{
          res.redirect('/movies');
        })
        .catch((error)=>{
            console.log("cannot save the movie properly")
            res.redirect('/movies/newmovie')
        })
      
      });


      router.post('/:id/delete',  (req, res, next) => {
        movieModel.findByIdAndRemove({_id:req.params.id})
        .then((dbRes)=>{
          console.log("movie was deleted");
          res.redirect('/movies')
        })
        .catch((error)=>{
          console.log("there was errror deleting the movie")
   
        }) 
        
       });


       router.post('/:id/edit', (req, res, next) => {
        movieModel.findById({_id:req.params.id})
        .then((dbRes)=>{
          console.log(dbRes)
          res.render('movies/edit', { movie: dbRes });
         
        })
        .catch((error)=>{
          console.log("there was errror editing the movie")
   
        }) 
        
       });


       router.post('/:id', (req, res,next) => {
    
        console.log(req.body)
        
        movieModel.findByIdAndUpdate(req.params.id, req.body)
        .then((dbRes)=>{
          res.redirect('/movies');
        })
        .catch((error)=>{
            console.log("cannot update properly")
            res.redirect('/movies/edit')
        })
      
        
        
      });
       


   
      

    module.exports=router;
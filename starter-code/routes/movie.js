const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celebrity')
const Movie = require("../models/movies")

router.get('/',(req,res,next)=>{
  if(req.user){
    Movie.find().populate('author')
    .then((allMovies)=>{
      if(req.user){

        allMovies.forEach((e)=>{
            if(e.author._id.equals(req.user._id)){
                e.owned = true;
            }

        })
      }

      res.render("movies/index",{theMovies: allMovies})
    })
    .catch((err)=>{
      next(err);
    })
} else {
  req.flash("error","Sorry, you must be logged in to use that feature please log in") 
  res.redirect('/User/login')
}
})
router.get('/details/:id',(req,res,next)=>{
  Movie.findById(req.params.id).populate('actor')
  .then((theMovie)=>{
    console.log(theMovie);
    res.render("movies/details",{oneMovie: theMovie})
  })
  .catch((err)=>{
    next(err);
  })
})
router.get('/new',(req,res,next)=>{
  Celeb.find()
  .then((allCelebs)=>{ 
    res.render("movies/new",{theOptions: allCelebs})
  })
  .catch((err)=>{
    next(err);
  })
})
router.post('/',(req,res,next)=>{
  const {title, genre, plot}= req.body;

  const author = req.user._id;
  let actor = req.body.celebs;
  let arr = [];
  console.log(actor);
  actor.forEach((e)=>{
    if(e !== 'null'){
      arr.push(e);
    }
  })
  let newMovie = {
    title: title,
    genre: genre,
    plot: plot,
    actor: arr,
    author: author
  }
  Movie.create(newMovie)
  .then(()=>{
    req.flash('success', 'Movie Added Succesfully!!')
    res.redirect("/movies")
  })
  .catch((err)=>{
    next(err);
  })
})
router.post("/:id/delete",(req,res,next)=>{
  Movie.findByIdAndDelete(req.params.id)
  .then(()=>{
    req.flash('success','movie deleted!')
    res.redirect("/movies")
  })
  .catch((err)=>{
    next(err);
    console.log(err);
  })
})
router.get("/:id/edit",(req,res,next)=>{
  Celeb.find()
  .then((celebs)=>{
  Movie.findById(req.params.id).populate('actor')
  .then((oneMovie)=>{

    celebs.forEach((e,i)=>{
      oneMovie.actor.forEach((eachActor)=>{
        console.log(eachActor._id,e._id)
        if(eachActor._id.equals(e._id)){
          e.involves = true;
        }
      })
    })

    res.render("movies/editMovie",{theMovie: oneMovie, theCelebs: celebs})
  })
  .catch((err)=>{
    next(err);
  })
})
})
router.post("/update/:id",(req,res,next)=>{
  let id = req.params.id;
  let actor = req.body.celebs;
  let arr = [];
  console.log(actor);
  actor.forEach((e)=>{
    if(e !== 'null'){
      arr.push(e);
    }
  })
  const obj = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    actor: arr
  }




  Movie.findByIdAndUpdate(id, obj)
  .then(()=>{
    req.flash('success','movie updated!')
    res.redirect("/movies/details/"+id)
  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/add-multiple',(req,res,next)=>{
  if(!req.user){
    console.log('test');
    res.redirect('/User/login');
    return;
  }
  Celeb.find()
  .then((allCelebs)=>{
    res.render('movies/dynamic-movies',{allOptions: allCelebs})

  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/add-multiple-movies', (req, res, next)=>{
  console.log(!req.user);
   
  Movie.find().populate('actor')
  .then((listOfMovies)=>{
  
      res.json(listOfMovies)
  
  })
      .catch((err)=>{
          next(err);
      })
  })


  router.post('/add-multiple-movies', (req, res, next)=>{
    let title = req.body.title;
    let genre = req.body.genre;
    let plot = req.body.plot;
    let actor = req.body.actor;
    let author = req.user._id;
    console.log('test')
    Movie.create({
        title: title,
        genre: genre,
        plot: plot,
        actor: actor,
        author: author
    })
    .then((response)=>{


        res.json({message: 'Successfully Created Animal'});

    })
    .catch((err)=>{
        res.json(err);
    })

})
  

module.exports = router;
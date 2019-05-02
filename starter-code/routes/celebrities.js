const express = require('express');
const router  = express.Router();
const Celebrities = require('../models/celebrity')

//http://localhost:3000/celebrities

  router.get('/celebrities', (req,res,next) =>{  //triggered when going to Celebritiess page 
    Celebrities.find().then( CelebritiesFromDb =>{  //find all Celebritiess in the database 
      res.render('celebrities/index', { CelebritiesInHBS : CelebritiesFromDb }) //send all the books to the books.hbs file 
    })
  })

  router.get('/celebrity/:id', (req, res, next) => {
    let celebrityId = req.params.id;
    Celebrity.findOne({ _id: celebrityId })
      .then(celebrity => {
        if (!celebrity) {
          return res.status(404).render('not-found');
        }
        res.render('celebrities/show', { celebrity });
      })
      .catch(next);
   });

   router.post('/celebrities/new', (req, res, next)=>{
    const { name, occupation, catchphrase} = req.body;
    const newCeleb = new Celebrity({  name, occupation, catchphrase})
    newCeleb.save()
    .then((data) => {
        res.redirect('/celebrities');
    })
    .catch((error) => {
        console.log(error);
        res.redirect('/celebrities/new')
    })
});

router.get("/celebrities/delete", (req, res, next) => {
    console.log(req.query);
    Celebrity.findByIdAndDelete(req.query.celeb_id)
      .then(deleted => {
        res.redirect("/celebrities");
      })
      .catch(error => {
        console.log(error);
      });
  });
  
  router.get("/celebrities/edit", (req, res, next) => {
    Celebrity.findOne({ _id: req.query.celeb_id })
      .then(celeb => {
        res.render("celebrities/edit", { celeb });
      })
      .catch(error => {
        console.log(error);
      });
  });
  
  router.post("/celebrities/edit", (req, res, next) => {
    let { name, occupation, catchPhrase } = req.body;
    console.log(name, occupation, catchPhrase);
    Celebrity.findByIdAndUpdate(`${req.query.celeb_id}`, {
      name,
      occupation,
      catchPhrase
    }).then(updatedCeleb => {
      res.redirect("/celebrities");
    });
  });

// ------------------- Movies route--------------------------------------->

router.get("/movies", (req, res, next) => {
    Movie.find().then(moviesFromDb => {
      res.render("movies/index", { moviesInHBS: moviesFromDb });
    });
  });

  

  

module.exports = router;
require ('../app');
const express = require('express');
const router  = express.Router();

const Celebrity = require ("../models/celebrity") //los models siempre con mayuscula 


router.get('/celebrities', (req, res) => {  //el primer fallo de crear el archivo celebrities.js fue pasar este codigo alli, moviendo este codigo de nuevo a index.js ya funciona, pendiente revisar si esto es correcto
    Celebrity.find()
        .then((theCelebrity) => {
            console.log(theCelebrity)
            res.render('celebrities/index.hbs', {theCelebrity})
        })
        .catch(err => console.log('Error', err))
    
        })
  
      
router.get('/celebrities/:id', (req, res) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => res.render('celebrities/show.hbs', {celebrity}))
        .catch(error => console.log("Oppsss, an error happened", error))
          
      })

    //create new celebrity

router.get('/views/celebrities/news', (req, res, next) => {
        // Iteration: Add a new celebrity
        // ... your code here
        res.render('../views/celebrities/news.hbs')
      });

router.get('/drones/:id/edit', (req, res, next) => {
        // Iteration #4: Update the drone
        // ... your code here
        console.log(req.params.id)
        Celebrity.findById(req.params.id)
            .then((drone) => {
                console.log(drone)
                res.render ('../views/celebrities/news.hbs')
            })
      });      
      
router.post('/celebrities/:id/edit', (req, res, next) => {
        // Iteration: Add a new celebrity
        // ... your code here
    let {name, occupation, catchPhrase} = req.body
    console.log(req.body)
    Celebrity.create(req.body)
          .then(() => {
            res.render('../views/celebrities/news.hbs', {successCelebrity: true})
          })
            .catch(error => console.log("Oppsss, an error happened", error))
      });


router.post('/celebrities/:id/delete', (req, res) => {
  Celebrity.findByIdAndDelete(req.params.celebrities)
        .then((result) => {
        res.redirect('/index')
  })

}

  
        
  
  module.exports = router;
var express = require('express');
const Celebrity = require('../models/celebrity');
var router = express.Router();


/* GET celebrities */

router.get('/', async (req, res, next) => {
     try{ 
         let respuesta = await Celebrity.find() 
        console.log(respuesta) 
        res.render('celebrities/index', {respuesta});
     }
     catch(err){ console.log('Error while getting the celebrities from the DB: ', err);
     }
     }); 


        //iteracion 4
        // get celebrities/new

        
        router.get('/new', (req, res, next) => {
            res.render("celebrities/new")
             });


             router.post('/new', (req, res, next) => {
                const { name, occupation, catchPhrase } = req.body
                const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
                newCelebrity.save()
                .then(() => {
                  res.redirect('/celebrities');
                })
                .catch(error => {
                    res.render('celebrities/new')
                  })
                
              });

                // iteracion 5

              router.post('/:id/delete', (req, res, next) => {
                Celebrity.findByIdAndRemove(req.params.id)
                .then(() => {
                  res.redirect('/celebrities');
                })
                .catch(error => {
                    next()
                  })
                
              });


     //iteracion 3
     //get celebrities:id

     router.get('/:celebritiesId', (req, res, next) => {
        Celebrity.findById(req.params.celebritiesId)
        .then(celebritiesId => {
          
          res.render("celebrities/show", {celebritiesId})
        })
          .catch(error => {
            console.log('Error while getting the celebrities from the DB: ', error);
          })
        });

     

  module.exports = router;

  
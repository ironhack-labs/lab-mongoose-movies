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
  
      
router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then(celebrity => res.render('celebrities/show.hbs', {celebrity}))
        .catch(error => console.log("Oppsss, an error happened", error))
          
      })

    //create new celebrity

router.get('/celebrities/news', (req, res) =>{
      res.render('celebrities/news.hbs')
    })

router.post('/celebrities/news', (req, res, next) => {
      let {name, occupation, catchPhrase} = req.body
    console.log(req.body)
    Celebrity.create(req.body)
          .then(() => {
            res.render('../views/celebrities/news.hbs', {successCelebrity: true})
          })
            .catch(error => console.log("Oppsss, an error happened", error))
      });    

      //edit
router.get('/celebrities/:id/edit', (req, res, next) => {
      Celebrity.findById(req.params.id)
        .then((celebrity)=> res.render('celebrities/edit.hbs', {celebrity}))
        .catch(() => {
          console.log('Error is:', err)
      })
    });

      
router.post('/celebrities/:id', (req, res, nex) => {
      // const { name, occupation, catchPhrase } = req.body;
      Celebrity.findByIdAndUpdate(req.params.id, req.body)
      .then(celebrity => {
        console.log('celebrity updated')
        res.redirect('/celebrities')
      })
      .catch(error => console.log('An error has ocurred', error))
    })

//delete
router.post('/celebrities/:id/delete', (req, res) => {
  Celebrity.findByIdAndDelete(req.params.id)
        .then((result) => {
        res.redirect('/index')
  })

})
        
module.exports = router;
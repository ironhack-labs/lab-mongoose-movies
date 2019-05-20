const express = require('express')
const router = express.Router()

const Celebrity = require('../models/Celebrity.models')


router.get('/list', (req, res, next) => {
  Celebrity.find()
    .then( allCelebs => {
      
      res.render('celebrities/list', {celbs: allCelebs})
    
    })
    .catch( err => console.log('error finding celebrities', err))
    
})



router.get('/list/:celeb_id', (req, res, next) => {
  Celebrity.findById(req.params.celeb_id)
    .then( theCeleb => {
      res.render('celebrities/details', theCeleb)
    })
    .catch(err => console.log('Helloooooooooooooooo', err))
  
})


router.get('/add', (req, res, next) => {
  res.render('celebrities/add')
})



router.post('/add', (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body
  const newCeleb = new Celebrity({name, occupation, catchPhrase})

  console.log('THIS IS THE NEW CELEB',newCeleb)
  newCeleb.save()
    .then(celeb => res.redirect('/celebrities/list'))
    .catch(error => {
      console.log(error) 
      res.render("celebrities/add")
    })

})

router.post("/:celeb_id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celeb_id)           //DeleteOne busca un objeto, para buscar por id es necesario pasar el _id
    .then( () => {
      res.redirect("/")
    })
    .catch(err => {
      console.log("error deleting celebrity",err)
      next()                                                    //NO ESTOY MUY SEGURO DE COMO FUNCIONA ESTE NEXT LA VDD
      
    })
})

router.get("/:celeb_id/edit", (req, res, next) => {
  Celebrity.findById(req.params.celeb_id)
    .then( theCeleb => {
      res.render("celebrities/edit", theCeleb)

    })
    .catch(err => {
      console.log(err)
      next()
    })
})

router.post("/:celeb_id/edit", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body
  Celebrity.findOneAndUpdate(req.params.celeb_id, {name, occupation, catchPhrase})
    .then( () => {
      res.redirect("/")
    }
    )
    .catch(err => console.log(err))


})

module.exports = router
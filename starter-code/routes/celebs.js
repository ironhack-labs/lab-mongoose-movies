const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')






router.get('/', (req, res, next) => res.render('celebs-index'))

router.get('/list', (req, res, next) => {                             // ESTO ES EL CONTROLADOR
  Celebrity.find()                                                         // ESTO ES EL MODELO
    .then(allCelebs =>{
      console.log("pp",allCelebs)
       res.render('celebs-list', { celebs: allCelebs })
      
      })  // ESTO ES LA VISTA
    .catch(error => console.log(error))
}
)




router.get('/detail/:celeb_id', (req, res) => {
  Celebrity.findById(req.params.celeb_id)
    .then(theCeleb => res.render('celebs-detail', { celeb: theCeleb }))
    .catch(error => console.log(error))
})




module.exports = router
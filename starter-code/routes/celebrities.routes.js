const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')



router.get('/', (req, res, next) => res.render("celebs-index"))


// Listado de Celebrities
router.get('/list', (req, res, next) => {
  Celebrity.find()

    .then(allCelebs => {
      console.log(allCelebs)
      res.render('celebs-list', { celebrities: allCelebs })
    })
    .catch(error => console.log(error))
})

//detalle de Celebrities
router.get('/view/:celebrity_id', (req, res) => {
  Celebrity.findById(req.params.celebrity_id)
    .then(theCelebrity => res.render('celebs-detail', { celebrity: theCelebrity }))
    .catch(error => console.log(error))
})



// Añadir nueva Celebrity
router.get('/add', (req, res) => res.render('celebs-add'))
router.post('/add', (req, res) => {

  const { name, occupation, catchPhrase } = req.body
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase })
  newCelebrity.save()
    .then(theCelebrity => res.redirect('/celebrities/list'))
    .catch(error => console.log(error))
})


//delete Celebrity

router.post('/delete/:celebrity_id', (req, res) => {
  Celebrity.findByIdAndRemove(req.params.celebrity_id)
    .then(theCelebrity => {
      res.redirect('/celebrities/list')
    })
    .catch(error => console.log(error))
})



//editar Celebrity
router.get('/edit/:celebrity_id', (req, res) => {
  console.log("entrando a ruta de get")
  Celebrity.findOne({ _id: req.params.celebrity_id })
    .then(celebrity => res.render("celebs-edit", { celebrity }))
    .catch(error => console.log(error))
})

router.post('/edit/:celebrity_id', (req, res) => {
  const { name, occupation, catchPhrase } = req.body
  Celebrity.update({ _id: req.params.celebrity_id }, { $set: { name, occupation, catchPhrase } })
    .then(() => res.redirect('/celebrities/list'))
    .catch(error => console.log(error))

})






module.exports = router
const express = require('express');
const router  = express.Router();

const Cel = require('../models/celebrity.model')



/* GET home page */
router.get('/', (req, res,) => {
  res.render('cel/cel-index');
});

//LISTAR FAMOSO

router.get('/list', (req, res) => {
  Cel.find()
    .then(allCels => res.render('cel/cel-list', { cels: allCels }))
    .catch(err => console.log("Error consultadno las cels en la BBDD: ", err))
})

// BUSCAR FAMOSO

router.get('/details/:id', (req, res) => {

  const id = req.params.id

  Cel.findById(id)
    // .populate('author')
    .then(theCel => res.render('cel/cel-detail',theCel))
    .catch(err => console.log("Error consultando cel por ID en la BBDD",err))
})

//CREAR FAMOSO

router.get('/add', (req, res) => res.render('cel/cel-form'))
router.post('/add',(req,res) => {
  
  const { name, occupation, catchPhrase} = req.body

  Cel.create({ name, occupation, catchPhrase})
    .then(() => res.redirect('/celebrities/list'))
    .catch(err => console.log("Error creando cel en la BBDD",err))

})

// ELIMINAR FAMOSO

router.post('/:id/delete',(req,res) => {

  const id = req.params.id

  Cel.findByIdAndDelete(id)
    .then((x)=> res.redirect('/celebrities/list'))
    .catch(err => console.log("ha ocurrido un error eliminando de la bbdd",err))
})

module.exports = router;
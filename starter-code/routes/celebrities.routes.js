const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity.model");

// Endpoints
router.get("/listado", (req, res) => {
    Celebrity
    .find()
    .then(allCelebrities => res.render("celebrities/celebrity", { allCelebrities }))
    .catch((err) => console.log("Error en la BBDD", err));
});

router.get("/detalle/:Id", (req, res) => {
  Celebrity
    .findById(req.params.Id)
    .then(theCelebrity => res.render("celebrities/show", theCelebrity))
    .catch((err) => console.log("Error en la BBDD", err));
});

router.get('/crear', (req, res) => {
  res.render('celebrities/new')
})

router.post('/crear', (req, res) => {

  const { name, occupation, catchPhrase } = req.body

  Celebrity
    .create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebridades/listado'))
    .catch(err => console.log("Error en la BBDD", err))
})

router.post('/:Id/eliminar', (req, res) => {
  
  Celebrity
    .findByIdAndRemove(req.params.Id)
    .then(() => res.redirect('/celebridades/listado'))
    .catch(err => console.log("Error en la BBDD", err))
  
})

router.get('/:Id/editar', (req, res) => {

    Celebrity
        .findById(req.params.Id)
        .then(theCelebrity => res.render('celebrities/edit', theCelebrity))
        .catch(err => console.log("Error en la BBDD", err))
})


router.post('/editar/:Id', (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity
        .findByIdAndUpdate(req.params.Id, { name, occupation, catchPhrase }, { new: true })
        .then(() => res.redirect('/celebridades/listado'))
        .catch(err => console.log("Error en la BBDD", err))
})



module.exports = router;


const express = require('express');
const router  = express.Router();
const {
  getCelebrities, 
  getCelebrity,
  showCelebrityForm, 
  createCelebrity, 
  deleteCelebrity, 
  updateCelebrity
} = require("../controllers/celebrities.controllers")

router.get('/', getCelebrities)
router.get('/new', showCelebrityForm)  //porque poniéndolo arriba si funciona? si lo pongo después de la ruta /:celebrityId no funciona
router.get('/:celebrityId', getCelebrity)
router.post('/', createCelebrity)
router.post('/:celebrityId/delete', deleteCelebrity)
router.post('/:celebrityId/update', updateCelebrity)


module.exports = router;



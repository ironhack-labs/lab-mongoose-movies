const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get("/new", (req, res, next) => {
  res.render("new");
});

//***rutas***//

//ruta celeb
router.get('/celeb', (req, res, next) => {
  Celebrity.find()
  .then(celeb => {
    res.render("celeb",{celeb});
  })
  .catch(error => {
    console.log(error)
  })
})//fin de ruta celeb

//ruta para celebridad individual
router.get('/celeb/:id',(req, res, next) =>{
  let celebID = req.params.id;
  Celebrity.findOne({'_id': celebID})
  .then(celeb => {
    res.render("shows",{celeb})
  })
  .catch(error =>{
    console.log(error)
  })
})//fin de ruta individual


//ruta para nueva celebriad
router.post('/celeb/new',(req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  const newCeleb = new Celebrity({name,occupation,catchPhrase});

  newCeleb
  .save()
  .then(celeb => {
    res.redirect("/celeb",{celeb});
    console.log("se ha guarado con exito");
  })
  .catch(error => {
    console.log(error);
  })
})//fin de nueva celebirad 



module.exports = router;

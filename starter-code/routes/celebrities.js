//requerimos (llamamos) a la librera express
var express = require('express');
//metodo que te redirecciona
var router = express.Router();

const Celebrity = require("../models/Celebrity");


//enumera todos los libros en una nueva ruta
//a donde quiero que yo entre para que haga todo lo de abajo
router.get('/', (req, res, next) => {
  //te devuelve todas las celebrities
  //el nombre de modelo
    Celebrity.find()
    //si no hay error ejecuta el then. AllTheCelebFromDB es todo lo q me devuelve el resutlado de busqueda
      .then(allTheCelebFromDB => {
       
        //que me imprima en la pagina   el resultado obtenido arriba
        //le pongo adelante el celebrities porqe es la carpeta que tengo dentro de views
        //si renderizaamos fuera del then se procesaria antes de devolver los datos por ser una consulta asincrona
        //el celebrity: es el resultado del find lo q dsp uso para renderizar las paginas
        res.render('celebrities/index', {celebrity: allTheCelebFromDB});
        console.log(celebrity)
      })
      
      //si hay un error entra al catch y te muestra en pantalla el error.
      .catch(error => {
        console.log('Error while getting the celebrities from the DB: ', error);
      })
  });

//creo la ruta hacia la pagina celebrities/id
router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
      .then(celebrityDetails => {
          console.log(celebrityDetails);
          //render primer argumento declaro la carpeta no la ruta
          res.render('celebrities/show', {celebrityDetails});
      })
      .catch(error => {
          console.log('Error retrieving id:', error);
      });
});

//añadir celebrities
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});
//obtengo los datos obtenidos del formulario
router.post('/celebrities/new', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity.save()
      .then((celebrity) => {
          res.redirect('/celebrities');
      })
      .catch(error => {
          console.log('Error:', error);
      });
});
  

//exportar los valores de ruta, celebrities.js a partir de esta ruta usar este archivo
  module.exports=router;
var express = require("express");
var router = express.Router();

//Llamar al modelo que hemos creado
const Celebrity = require("../models/celebrity.js");

//Iteration #2: Listing Our Celebrities
router.get("/", (req, res, next) => {
  //Llamar al modelo y utilizar el método find
  Celebrity.find().then(
    //Almacenamos todo en allCeleb
    function (allCeleb) {
      //console.log("Celebrities", allCeleb);
      //renderizamos celebrities/index con los datos de allCeleb
      res.render("celebrities/index", { allCeleb });
    },
    function (error) {
      console.log("Error while getting the books from the DB: ", error);
    }
  );
});

//Iteration #2: Listing Our Celebrities
// router.get('/', async (req, res, next) => {
// try{
//     let allCeleb = await Celebrity.find()
//     console.log('Celebrities', allCeleb)
//       res.render('celebrities/index', { allCeleb });
//   }catch(err){
//       console.log('Error while getting the celebrities from the DB: ', err);
//   }
// });

//Iteration #4: Adding New Celebrities
//GET: Show a form to create a celebrity
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

//POST: Send the data from the form to this route to create the celebrity and save to the database
router.post("/", (req, res, next) => {
  //obtener los datos del formulario y almacenarlos en nuevas variables (desestructurar del **req.body**).
  const { name, occupation, catchPhrase } = req.body;
  console.log(req.body);
  //crear un nuevo Celebrity usando el modelo que importamos.
  const newCeleb = new Celebrity({ name, occupation, catchPhrase });
  //almacenar el nuevo celebrity en la base de datos, utilizando el método save()
  newCeleb.save().then(
    function (data) {
      res.redirect("/celebrities");
    },
    function (err) {
      console.log("Something went wrong!", err);
      res.redirect("celebrities/new");
    }
  );
});

//Iteration #5: Deleting Celebrities
router.post("/:id/delete", (req, res, next) => {
  // traemos el id a través de params, y lo metemos en una variable
  let celebrityId = req.params.id;
  console.log(celebrityId);
  Celebrity.findByIdAndRemove(celebrityId).then(
    //Almacenamos todo en data
    function (data) {
      res.redirect("/celebrities");
    },
    function (error) {
      next(error);
      console.log("Error while getting the books from the DB: ", error);
    }
  );
});

//## Iteration #6 (Bonus): Editing Celebrities
//GET: mostrar el formulario con los campos completados
router.get("/:id/edit", (req, res, next) => {

  let celebrityId = req.params.id;
  console.log(celebrityId)
  Celebrity.findById(celebrityId).then(
    function(data) {
      
      res.render("celebrities/edit", {data})
    },
    function (error) {
      next(error);
      console.log("Error while getting the books from the DB: ", error);
    }
  )
})
//POST actualizar la información
router.post("/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  let celebrityId = req.params.id;
  Celebrity.update(
    { _id: celebrityId },
    { $set: { name, occupation, catchPhrase } },
    { new: true }
  ).then(
    function (data) {
      res.redirect("/celebrities");
    },
    function (err) {
      next(error);
      console.log("Something went wrong!", err);
    }
  );
});

//## Iteration #8: Listing Our Movies


//Iteration #3: The Celebrity Details Page
router.get("/:id", (req, res, next) => {
  // traemos el id a través de params, y lo metemos en una variable
  let celebrityId = req.params.id;
  Celebrity.findById(celebrityId).then(
    function (data) {
      console.log("Celebrity Details", data);
      res.render("celebrities/show", { data });
    },
    function (err) {
      console.error(err);
    }
  );
});

module.exports = router;

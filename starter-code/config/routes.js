const express = require("express");
const Celebrity = require("../models/Celebrity.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
  .then((celebrities) => {
    res.render("celebrities/index", {
      celebrities
    });
  })
  .catch((e) => next(e));

})

//============================Create======================================

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
  
})

router.post("/celebrities/new", (req, res, next) => {

  const celebrity = req.body
 
   Celebrity.create(celebrity)
     .then(() => res.redirect("/celebrities"))
     .catch((error) => `Error while creating a new celebrity: ${error}`);  
})
//=========================Create alternative=======================================
/* router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
  
})

router.post("/celebrities/new", (req, res, next) => {

  const celebrity = req.body
  const newCelebrity = new Celebrity(celebrity) 
   newCelebrity.save()
    .then(()=>  res.redirect("/celebrities"))
    .then(() => console.log(`New celebrity created: ${celebrity.name}.`))
    .catch(error => `Error while creating a new celebrity: ${error}`);  
})
 */
//==================================================


router.get("/celebrities/:id", (req, res, next) => {
  const id = req.params.id
  Celebrity.findById(id)
    .then(celebrity => {
      res.render("celebrities/show", celebrity);
    })
    .catch((e) => next(e));
  });
//=============== DELETE ========================================

router.post("/celebrities/:id/delete", (req, res, next) => {
  const id = req.params.id
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect("/celebrities" );
    })
    .catch((e) => next(e));
});
//==================================================================

//======================EDIT============================================

router.get("/celebrities/:id/edit", (req, res, next) =>{
  const id = req.params.id
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render("celebrities/edit", celebrity)
    })
    .catch((e) => next(e));
});

router.post("/celebrities/:id/edit", (req, res, next) => {
  const id = req.params.id
  const celebrity = req.body;

  Celebrity.findByIdAndUpdate(id, celebrity, {new: true})
    .then(() => {
      console.log("actualizando info")
      res.redirect("/celebrities")
    })
    .catch((e) => next(e));
  });
//==================================================================

  module.exports = router;


  
  // ===========================================================
  /* router.get('/drones/create', (req, res, next) => {
    // Iteration #3: Add a new drone
    res.render("drones/create-form");
    // ... your code here
  });
  
  router.post('/drones/create', (req, res, next) => {
    // Iteration #3: Add a new drone
    const drone = req.body

    Drone.create(drone)
    .then(() => res.redirect("/drones"))
    .catch((e) => next(e));
    
  })
 */
//======================================================== Learning unit
/* router.post('/books/create', (req, res) => {
  const { title, author, description, rating } = req.body;
 
  Book.create({ title, author, description, rating })
    .then(() => res.redirect('/books'))
    .catch(error => `Error while creating a new book: ${error}`);
}); */
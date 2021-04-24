const { Router } = require("express");
const router = Router();
const Celebrity = require("../models/celebrity.model");

router.get("/celebrities", (app_name, res, next) => {
  
  Celebrity.find({})
  .then((celebFound) => {
    
    res.status(200).render("celebrities/index", { celebCard: celebFound });
  })
  .catch( (celebFoundError) => {
    console.error(`ERROR trying to list celebrities: ${celebFoundError}`);

    next(celebFoundError);
  })  
})

router.get("/celebrities/new", (app_name, res) => {
  res.status(200).render('celebrities/new');
})

router.post("/celebrities/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  
  Celebrity.create({ name, occupation, catchPhrase })
  .then( ( resCelebCreated ) => {
    
    res.status(200).render('celebrities/show', { celebDetails: resCelebCreated });
  })
  .catch( createError => {
    console.error(`ERROR when creating celebrity: ${createError}`);
      
    if(createError == 11000) {
      res.status(400).render('celebrities/new', { message: "This celebrity already exists, please try another one." });
    } else {
      res.status(500).render('celebrities/new', { message: "Oops, something went wrong with our server. Please, tr again!" });
    }

    next(createError);
  })
})

router.get("/celebrities/:id", (req, res, next) => {
  const { id } = req.params;
    
  Celebrity.findById(id)
  .then((celebDetailsFound) => {

    res.status(200).render("celebrities/show", { celebDetails: celebDetailsFound });
  })
  .catch( (detailsFoundError) => {
    console.error(`ERROR trying to show details: ${detailsFoundError}`);

    next(detailsFoundError);
  })  
})

router.post("/celebrities/:id/delete", (req, res, next) => {
  const { id } = req.params;

  Celebrity.findByIdAndRemove(id)
  .then((deleteCelebrity) => {

    res.status(200).render("celebrities/deleted", deleteCelebrity);
  })
  .catch( (deleteError) => {
    console.error(`ERROR trying to delete details: ${deleteError}`);

    next(deleteError);
  })  
})

router.get("/celebrities/:id/edit", (req, res) => {
  const { id } = req.params;
    
  Celebrity.findById(id)
  .then( (rslCelebFound) => {
    
    res.status(200).render("celebrities/:id", {rslCelebFound})
  })
  .catch( (err) => {
    console.error(`ERROR trying to find user by ID ${err}`);

    next(err);
  }) 
})

router.post("/celebrities/:id", (req, res, next) => {
  const { id } = req.params.id;
  const { name, occupation, catchPhrase } = req.body;
        
  Celebrity.findOneAndUpdate(
    { id }, 
    { name, occupation, catchPhrase }, 
    { new: false },
    )
  .then( ( celebEdited ) => {
    
    res.status(200).render('celebrities');
  })
  .catch( createError => {
    console.error(`ERROR when updating celebrity: ${createError}`);

    next(createError);
  })
})

module.exports = router;
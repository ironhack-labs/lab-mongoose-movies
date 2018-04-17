const express = require('express');
const router  = express.Router();
const Celebrity = require ("../models/celebrity-model.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
  .then((celebritiesFromDb) => {
    console.log(celebritiesFromDb);
    res.locals.celebrityList =  celebritiesFromDb;
    res.render("celebrities-page");
  })
  .catch((err) => {
     next(err);
  });
  
});

router.get("/celebrities/new", (req, res, next) => {
    res.render("new")
})

router.post("/process-celebrity", (req, res, next) => {
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
    .then (() => {
      //redirect ONLY to URLs
      // (redirect so we dont get duplicate data on refresh)
       res.redirect("/celebrities");
    })
    .catch ((err) => {
       next(err);
    });
});

 router.get("celebrities/:celebrityId/edit", (req, res, next) => {
  
    Celebrity.findById(req.params.celebrityId)
    .then((celebrityDetails) => {
      res.locals.celebrityId = req.params.celebrityId;
      res.locals.celebrity = celebrityDetails;
      res.render("celebrity-edit");
    })

    .catch((err) => {
        next(err);
    })    
  });

  router.post("/process-edit/:celebrityId", (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.findByIdAndUpdate(
      req.params.celebrityId, 
      {name, occupation, catchPhrase},
      {runValidators: true} 

    )
    .then (() => {
       res.redirect(`/celebrities/${req.params.celebrityId}`)   
    })
    .catch ((err) => {
       next(err);
    });
  });


router.get("/celebrities/:celebrityId", (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
  .then((celebrityDetails) =>  {
    res.locals.celebrity = celebrityDetails;
    res.render("show");
  })
  .catch((err) => {
    //show the error page with this error
   next(err);
 });
 });

 router.get("/celebrities/:celebrityId/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celebrityId)
    .then (() => {
      res.redirect("/celebrities");
    })
    .catch ((err) => {
       next(err);
    });
 });

module.exports = router;

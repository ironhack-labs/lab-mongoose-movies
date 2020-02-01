const express = require('express');
const router = new express.Router();
const CelebrityModel = require("./../models/Celebrity");

router.get("/celebrities", (req, res, next) => {
    CelebrityModel
    .find()
    .then(celebrities => {
        res.render("celebrities/index", {
          celebrities
        });
      })
      .catch(dbErr => {
        console.log("OH NO ! Database error", dbErr);
      });
    });

router.get("/celebrities/new", (req, res, next)  => {
    res.render("celebrities/new");
});


router.post("/celebrities/new", (req, res, next)=> {
 const { name, occupation, catchPhrase } = req.body;
    CelebrityModel
    .create({
      name,
      occupation,
      catchPhrase
    })
    .then(dbRes => res.redirect("/celebrities"))
    .catch(dbErr => {
      console.log(dbErr);
     res.render("celebrities/new");

    });
  });

  router.get("/celebrities/:id", (req, res, next)=> {
    CelebrityModel
    .findById(req.params.id)
    .then(celebrity=> {
        res.render("celebrities/show", { celebrity });
        })
    .catch(dbErr => console.error("OH no, db err :", dbErr));
});

router.get("/celebrities/:id/delete", (req, res, next) => {
    CelebrityModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
        res.redirect("/celebrities");
    })
    .catch(dbErr => console.error("OH no, db err :", dbErr));
} )


router.get("/celebrities/:id/edit", (req, res, next) => {
    CelebrityModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("celebrities/edit", { celebrity: dbRes });
    })
    .catch(dbErr => console.error(dbErr));
});





router.post("/celebrities/:id/edit", (req,res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    CelebrityModel
    .findByIdAndUpdate(req.params.id, {
        name, 
        occupation,
        catchPhrase
    })
    .then(dbRes => {
        res.redirect("/celebrities");
    })
    .catch(dbErr => {
        console.error("OH no, db err :", dbErr) 
        res.redirect("/celebrities")
        
     } );
})


    module.exports = router;

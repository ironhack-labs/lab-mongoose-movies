const express = require('express');
const router  = express.Router();
const celebritiesModel = require("./../models/celebrity");


// router.get('/celebrities', (req, res, next) => {
//     res.render("celebrities/index");
//   });

router.get("/celebrities", (req, res) => {
    celebritiesModel
      .find()
      .then(dbResults => {
        res.render("celebrities/index", {
          celebrities: dbResults
        });
      })
      .catch(dbErr => {
        console.log("OH NO ! Database error", dbErr);
      });
});


router.get("/celebrities/single/:id", (req, res) => {
    celebritiesModel
    .findById(req.params.id)
    .then(celebrity => {
        res.render("celebrities/show", {celebrity})
    })
    .catch(dbErr => {
        console.log("OH NO ! Database error", dbErr);
      });
});


router.get("/celebrities/add", (req, res) => {
    res.render("celebrities/new");
  });


router.post("/celebrities/add", (req, res) => {
    const { name, occupation, catchphrase } = req.body;
    celebritiesModel
      .create({
        name,
        occupation,
        catchphrase
      })
      .then(dbRes => {
            console.log("success", dbRes);
           res.redirect("/celebrities")
      })
      .catch(dbErr => {
        console.log(dbErr);
        res.render("/celebrities/add");
      });
});


router.get("/celebrities/:id/edit", (req, res) => {
    celebritiesModel
      .findById(req.params.id)
      .then(dbRes => {
        res.render("celebrities/edit", { celebrity: dbRes });
      })
      .catch(dbErr => console.error(dbErr));
  });


  router.post("/celebrities/:id/edit", (req, res) => {
    const { name, occupation, catchphrase } = req.body;
    celebritiesModel
    .findByIdAndUpdate(req.params.id, {
      name,
      occupation,
      catchphrase
    })
    .then(dbRes => {
      res.redirect("/celebrities");
    })
    .catch(dbErr => {
      console.error(dbErr)
    });
  });


router.get("/celebrities/:id/delete", (req, res) => {
    celebritiesModel
      .findByIdAndDelete(req.params.id)
      .then(dbRes => {
        console.log("id was deleted", dbRes);
        res.redirect("/celebrities");
      })
      .catch(dbErr => {
        console.error(dbErr);
      });
  });






module.exports = router;
const express = require('express');
const router  = express.Router();
const CelebrityModel = require("./../models/Celebrity.model");


/* GET celebrities page */
router.get('/celebrities', (req, res, next) => {
  
    CelebrityModel.find()
      .then((dbRes) => {
        // console.log(dbRes);
        res.render("celebrities/index.hbs", { celebrities: dbRes });
      })
      .catch((error) => {
        console.log(error);
      });
  });

 

  router.get("/celebrities/new", (req, res, next) => {
    res.render("celebrities/new.hbs");
  });

  router.post('/celebrities/new', async (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body; 
    
    try {
      await CelebrityModel.create({
        name,
        occupation,
        catchPhrase
        
      });
      res.redirect("/celebrities");
    } catch (err) {
      next(err);
    }
     
  });

  router.get('/celebrities/:id', (req, res, next) => {
  
    CelebrityModel.findById(req.params.id)
      .then((dbRes) => {
         console.log(dbRes);
        //  console.log(req.params.id);
        res.render("celebrities/show.hbs", { dbRes });
      })
      .catch((error) => {
        next(error);
      });
  });

  router.get("/celebrities/delete/:id", async (req, res, next) => {
    try {
      await CelebrityModel.findByIdAndDelete(req.params.id);
      res.redirect("/celebrities");
    } catch (err) {
      next(err); 
    }
  });

module.exports = router;


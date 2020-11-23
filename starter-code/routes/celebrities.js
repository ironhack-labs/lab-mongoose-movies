const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
      .then((celebritiesfromDB) => {
        console.log("...something....");
        console.log("found Celebrities: ", celebritiesfromDB);
        res.render("celebrities/index", { celebritiesfromDB });
      })
      .catch((err) => console.error("Error getting the celebrities", err)); //next()
  });

  //create new celebrity
  router.get("/celebrities/new", (req, res, next) => {
    res.render("celebrities/new");
  });

  //Post route for new celebrity
router.post("/celebrities", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({ name, occupation, catchPhrase })
      .then((newCelebrity) => {
        console.log("New Celebrity:", newCelebrity);
        res.redirect("/celebrities");
      })
      .catch((err) => {
        console.log("error creating new Celebrity:", err);
        res.redirect("/celebrities/new");
      });
  });

/* GET Celebrities Details page by Id*/
router.get("/celebrities/:id", (req, res, next) => {
    const id = req.params.id;
    Celebrity.findById(id)
      .then((celebrityDetails) => {
        console.log("Celebrity Details: ", celebrityDetails);
        res.render("celebrities/show", { celebrityDetails });
      })
      .catch((err) =>
        console.error("Error getting the celebrities details page", err)
      );
  });

  //Edit celebrities
  router.get('/celebrities/:id/edit', (req, res) => {
    const id = req.params.id;
    Celebrity.findById(id)
      .then(celebrityToEdit => {
        console.log(celebrityToEdit);
        res.render('celebrities/edit', { celebrityToEdit });
      })
      .catch(error => console.log(`Error while getting a celeb for edit: ${error}`));
  });
  
  router.post('/celebrities/:id/edit', (req, res) => {
    const  id  = req.params.id;
    //const { name, occupation, catchPhrase } = req.body;
   
    Celebrity.findByIdAndUpdate(id, req.body, { new: true })
    .then(updatedCeleb => res.redirect(`/celebrities/${updatedCeleb._id}`))
    .catch(error => console.log(`Error while updating a celeb: ${error}`));
  });
  
  // Delete celebrities
  router.post('/celebrities/:id/delete', (req, res) => {
    const { id } = req.params;
   
    Celebrity.findByIdAndDelete(id)
      .then(() => res.redirect('/celebrities'))
      .catch(error => console.log(`Error while deleting a celebrity: ${error}`));
  });

module.exports = router;

const celibrityModel = require("./../models/Celebrity");

module.exports = function(router) {

  // GET all celebrities route page
  router.get("/celebrities", (req, res) => {
    celibrityModel
      .find() //
      .then(dbResults => {
        res.render("celebrities/index", {
          celebrities: dbResults
        });
      })
      .catch(dbErr => {
        console.log("OH NO ! Database error", dbErr);
      });
  });

  router.post("/celebrities", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
 
    celibrityModel
      .create({ name, occupation, catchPhrase })
      .then(dbRes => res.redirect("/celebrities"))
      .catch(dbErr => {
        console.log(dbErr);
        res.render("celebrities/new") 
      });
    // res.render("celebrities/new") 
  })

  router.get("/celebrities/new", (req, res) => {
    res.render("celebrities/new") 
  })

  router.get("/celebrities/:id", (req, res) => {
    celibrityModel
      .findById(req.params.id)
      .then(dbRes => {
        res.render("celebrities/show", { celebrityDetails: dbRes });
      })
      .catch(dbErr => console.error(dbErr));
  });

  
  router.post("/celebrities/:id/delete", (req, res) => {
 
    celibrityModel
      .findByIdAndDelete(req.params.id)
      .then(dbRes => {
        res.redirect("/celebrities");
      })
      .catch(dbErr => console.error(dbErr));
  })

};

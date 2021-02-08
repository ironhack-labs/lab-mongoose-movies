var express = require("express");
var celebritiesRouter = express.Router();
const Celebrity = require("./../models/celebrity");

// GET     /books
celebritiesRouter.get("/", (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) => {
      const data = {
        allCelebrities: allCelebrities,
      };
      res.render("celebrities/index", data);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

celebritiesRouter.get("/:celebrityId", (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then((foundCelebrity) => {
      const data = {
        foundCelebrity: foundCelebrity,
      };
      res.render("celebrities/show", data);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

celebritiesRouter.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

celebritiesRouter.post("/", (req, res, next) => {
  const { name, ocupation, catchPhrase } = req.body;

  Celebrity.create({ name, ocupation, catchPhrase })
    .then(() => {
      console.log("Create");
      
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/celebrities/new");
    });
});

celebritiesRouter.post("/:celebrityId/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.celebrityId)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

celebritiesRouter.get("/:celebrityId/edit", (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then((foundCelebrity) => {
      const data = {
        foundCelebrity: foundCelebrity,
      };
      res.render("celebrities/edit", data);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

celebritiesRouter.post("/:celebrityId", (req, res, next) => {
  const { name, ocupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.params.celebrityId, { name, ocupation, catchPhrase })
    .then(() => {
      console.log("Update");
      
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});


module.exports = celebritiesRouter;

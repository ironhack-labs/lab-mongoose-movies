const express = require("express");
const router = express.Router();

const celebrityModel = require("../models/celebrity");

const schoolModel = require("../models/school");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/celebrities", (req, res, next) => {
  celebrityModel
    .find()
    .then((celebrity) => {
      // console.log('something', celebrity)
      res.render("celebrities/index", { celebrity: celebrity });
    })
    .catch((error) => {
      console.log("Error while getting the celebrities from the DB: ", error);
      next();
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities/new", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  const newCelebrity = new celebrityModel({ name, occupation, catchPhrase });

  newCelebrity
    .save()
    .then((celebrity) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.render("celebrities/new");
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  celebrityModel
    .findById(req.params.id)
    .then((celebrity) => {
      res.render("celebrities/edit", { celebrity: celebrity });
    })
    .catch((error) => {
      console.log("Error: ", error);
      next();
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  celebrityModel
    .update(
      { _id: req.params.id },
      { $set: { name, occupation, catchPhrase } },
      { new: true }
    )
    .then((celebrity) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log("Error while editing one celebrity ", error);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  celebrityModel
    .findByIdAndRemove(req.params.id)
    .then((celebrity) => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log("Error: ", error);
      next();
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  celebrityModel
    .findById(req.params.id)
    .then((celebrity) => {
      // console.log('something', celebrity)
      res.render("celebrities/show", { celebrity: celebrity });
    })
    .catch((error) => {
      console.log("Error: ", error);
      next();
    });
});

router.get("/schools", (req, res, next) => {
  schoolModel
    .find()
    .then((school) => {
      // console.log('something', school)
      res.render("schools/index", { school: school });
    })
    .catch((error) => {
      console.log("Error while getting the schools from the DB: ", error);
      next();
    });
});

router.get("/schools/new", (req, res, next) => {
  res.render("schools/new");
});

router.post("/schools/new", (req, res, next) => {
  const { house, colour, animal } = req.body;

  const newSchool = new schoolModel({ house, colour, animal });

  newSchool
    .save()
    .then((school) => {
      res.redirect("/schools");
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.render("schools/new");
    });
});

router.post("/schools/:id/delete", (req, res, next) => {
  schoolModel
    .findByIdAndRemove(req.params.id)
    .then( (school) => {
      res.redirect("/schools");
    })
    .catch((error) => {
      console.log("Error: ", error);
      next();
    });
});

router.get("/schools/:id/edit", (req, res, next) => {
  schoolModel
    .findById(req.params.id)
    .then((school) => {
      res.render("schools/edit", { school: school });
    })
    .catch((error) => {
      console.log("Error: ", error);
      next();
    });
});

router.post("/schools/:id", (req, res, next) => {
  const { house, colour, animal } = req.body;

  schoolModel
    .update(
      { _id: req.params.id },
      { $set: { house, colour, animal } },
      { new: true }
    )
    .then((school) => {
      res.redirect("/schools");
    })
    .catch((error) => {
      console.log("Error while editing one school ", error);
    });
});

router.get("/schools/:id", (req, res, next) => {
  schoolModel
    .findById(req.params.id)
    .then((school) => {
      // console.log('something', school)
      res.render("schools/show", { school: school });
    })
    .catch((error) => {
      console.log("Error: ", error);
      next();
    });
});

module.exports = router;

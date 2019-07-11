const express = require("express");
const router = express.Router();
const Celeb = require("../models/celebrity");

router.get("/celebrities/Api-Call", (req, res, next) => {
  Celeb.find()
    .then(celeb => {
      res.json(celeb);
    })
    .catch(err => {
      next(err);
    });
});
router.post("/celebrities/Api-Call", (req, res, next) => {
  let name = req.body.name;
  let occupation = req.body.occupation;
  let catchPhrase = req.body.catchPhrase;

  Celeb.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  })
    .then(response => {
      res.json({ message: "Successfully Created Animal" });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities", (req, res, next) => {
  Celeb.find()
    .then(celeb => {
      res.render("celebrities/index", { celebs: celeb });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  if (!name) {
    res.redirect("/celebrities");
  }
  const data = {
    name,
    occupation,
    catchPhrase
  };

  Celeb.create(data)
    .then(() => {
      req.flash("success", "Celebrity created");
      res.redirect("/celebrities");
      // res.json({ message: "Successfully Created Animal" });
    })
    .catch(err => {
      next(err);
      // res.json(err);
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celeb.findById(req.params.id)
    .then(celeb => {
      res.render("celebrities/edit", { celebEdit: celeb });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  if (!name) {
    res.redirect(`/celebrities/${req.params.id}/edit`);
  }
  const data = {
    name,
    occupation,
    catchPhrase
  };

  Celeb.findByIdAndUpdate(req.params.id, data)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

//Create a Celeb VIA Api
router.get("/celebrities/newCeleb", (req, res, next) => {
  res.render("celebrities/newCeleb");
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celeb.findByIdAndDelete(req.params.id)
    .then(celeb => {
      req.flash("success", "Celebrity deleted");
      res.redirect("/celebrities");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celeb.findById(req.params.id)
    .then(celeb => {
      res.render("celebrities/show", { OneCeleb: celeb });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;

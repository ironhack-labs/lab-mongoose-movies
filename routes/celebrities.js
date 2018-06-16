//#region setup / imports
const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");
//#endregion

//#region celebs page GET /
router.get("/", (_, res, next) => {
  Celebrity.find({})
    .then(celebs => {
      res.render("celebrities/index", { celebs });
    })
    .catch(err => {
      next();
      return err;
    });
});
//#endregion

//#region show details page GET /:id
router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celeb => res.render("celebrities/show", celeb))
    .catch(err => {
      next();
      return err;
    });
});
//#endregion

//#region create new celeb GET /new POST /
router.get("/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  new Celebrity({ name, occupation, catchPhrase })
    .save()
    .then(_ => {
      res.redirect("/celebrities/");
    })
    .catch(err => {
      console.log(err);
      res.redirect("/celebrities/new");
    });
});
//#endregion

//#region delete celeb GET /:id/delete
router.get("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(_ => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next();
      return err;
    });
});
//#endregion

//#region edit celeb GET /:id/edit POST /:id
router.get("/:id/edit", (req, res, next) => {
  console.log("GET edit");

  Celebrity.findById(req.params.id)
    .then(celeb => {
      res.render("celebrities/edit", celeb);
    })
    .catch(err => {
      next();
      return err;
    });
});

router.post("/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(req.params.id, { name: name, occupation: occupation, catchPhrase: catchPhrase })
    .then(_ => {
      res.redirect("/celebrities/");
    })
    .catch(err => {
      next();
      return err;
    });
});
//#endregion

module.exports = router;

const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(allTheStars => {
      // console.log('Retrieved books from DB:', allTheBooksFromDB);
      res.render("celebrities", { stars: allTheStars });
    })
    .catch(error => {
      console.log("Error while getting the books from the DB: ", error);
    });
});

router.get("/celebrities/:celebrityId", (req, res, next) => {
  Celebrity.findById(req.params.celebrityId)
    .then(theStar => {
      res.render("celebrities-details", { star: theStar });
    })
    .catch(error => {
      console.log("Error while retrieving book details: ", error);
    });
});

router.get("/add", (req, res, next) => {
  res.render("edit");
});

router.post("/add", (req, res, next) => {
  const name = req.body.nombre;
  const occupation = req.body.ocupacion;
  const catchPhrase = req.body.frase;

  if (name === "" || occupation === "" || catchPhrase === "") {
    res.render("edit", {
      errorMessage: "Tienes que ingresar los datos"
    });
    return;
  }

  Celebrity.findOne({ name: name })
    .then(celebrity => {
      if (celebrity != null) {
        res.render("edit", {
          errorMessage: "Ese Actor ya existe, prueba editarlo"
        });
        return;
      }

      Celebrity.create({
        name,
        occupation,
        catchPhrase
      })
        .then(() => {
          res.redirect("/celebrities");
        })
        .catch(errr => {
          console.log(error);
        });
    })
    .catch(error => {
      next(error);
    });
});

router.post("/celebrities/:celebrityId", (req, res, next) => {
  const name  = req.body.nombre;
  const occupation = req.body.ocupacion;
  const catchPhrase = req.body.frase;

  if (name  === "" || occupation === "" || catchPhrase === "") {
    res.render("celebrities-details", {
      errorMessage: "Tienes que ingresar los datos"
    });
    return;
  }
  Celebrity.findById(req.params.celebrityId, (error, celebrity) => {
    if (error) {
      next(error);
    } else {
      celebrity.name = name;
      celebrity.occupation = occupation;
      celebrity.catchPhrase = catchPhrase;
      celebrity.save(error => {
        if (error) {
          next(error);
        } else {
          res.redirect(`/celebrities/${req.params.celebrityId}`);
        }
      });
    }
  });
});

router.get("/celebrities/:celebrityId/delete", (req, res, next) => {
  Celebrity.remove({ _id: req.params.celebrityId }, (error, celebrity) => {
    if (error) {
      next(error);
    } else {
      res.redirect("/celebrities");
    }
  });
});

module.exports = router;
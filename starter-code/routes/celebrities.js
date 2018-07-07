const express = require("express");
const url = require("url");
const router = express.Router();

const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find({})
    .then(celebrities => {
      res.render("celebrities/index", { celebrities });
    })
    .catch(err => {
      next();
    });
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  new Celebrity({ name, occupation, catchPhrase })
    .save()
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      setErrors(res, err);

      res.redirect("/celebrities/new");
    });
});

router.get("/celebrities/new", (req, res, next) => {
  const { nameClass, occupationClass, catchPhraseClass } = req.cookies;
  let errorFields = [];
  if (req.cookies.errorFields) {
    errorFields = req.cookies.errorFields.split(",");
  }

  resetCookies(res);

  const data = {
    form: {
      errorFields,
      nameClass,
      occupationClass,
      catchPhraseClass,
      action: '/celebrities',
      buttonText: 'Save'
    }
  }
  res.render("celebrities/new", { data });
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity });
    })
    .catch(err => {
      next();
    });
});

router.post("/celebrities/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const celebrity = { name, occupation, catchPhrase };

  Celebrity.findByIdAndUpdate(req.params.id, celebrity, { runValidators: true })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      setErrors(res, err);

      res.redirect(`/celebrities/${req.params.id}/edit`);
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      next();
    });
});

router.get("/celebrities/:id/edit", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => {
      celebrity[celebrity.occupation] = true;

      const { nameClass, occupationClass, catchPhraseClass } = req.cookies;
      let errorFields = [];
      if (req.cookies.errorFields) {
        errorFields = req.cookies.errorFields.split(",");
      }

      resetCookies(res);

      const data = {
        celebrity,
        form: {
          errorFields,
          nameClass,
          occupationClass,
          catchPhraseClass,
          action: '/celebrities/' + celebrity._id,
          buttonText: 'Edit'
        }
      }
      res.render("celebrities/edit", { data });
    })
    .catch(err => {
      next();
    });
});

const setErrors = (res, err) => {
  const errors = [];
  for (field in err.errors) {
    errors.push(err.errors[field].message);

    res.cookie(field + "Class" , "error", {maxAge: 3000});
  }

  res.cookie('errorFields' , errors.join(), {maxAge: 3000});
}

const resetCookies = (res) => {
  res.clearCookie('nameClass');
  res.clearCookie('occupationClass');
  res.clearCookie('catchPhraseClass');
  res.clearCookie('errorFields');
}

module.exports = router;
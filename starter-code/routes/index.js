const express = require('express');

// required for Book.find
const Celebrity = require("../models/celebrities-model.js")

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// to have a list of celebs page
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
  .then((celebrityResults) => {
    // send database results to the view as "bookArray"
    res.locals.celebrityArray = celebrityResults;
    res.render("../views/celebrities/index.hbs");
  })
  .catch((err) => {
    // show error page
    next(err);
  });
});

// place this route above "/celebrity/:bookId"
router.get("/celebrities/add", (req, res, next) => {
  res.render("../views/celebrities/new.hbs");
});

router.post("/process-celebrity", (req, res, next) => {
  // get variables from form submission (req.body for POST)
  const { name, occupation, catchPhrase } = req.body;
  // res.send(req.body);   <<--- delete this line
  // the stuff from req.body goes in here, must destructure req.body ^^ first:
  Celebrity.create({ name, occupation, catchPhrase })
    .then((celebDoc) => {
      // doing a redirect here instead of render
      // redirect ONLY to URLs ("/books" instead of "celebrity-page.hbs")
      // (redirect to avoid duplicate data)
      res.redirect("/celebrities");
    })
    .catch((err) => {
      // show our error page
      next(err);
    });
});

/// this is the only time we write /:bookId -- when defining it
router.get("/celebrities/:celebId", (req, res, next) => {
  // get the ID from the URL
  // const bookId = req.params.bookId
  // or
  const { celebId } = req.params;
Celebrity.findById(celebId)
.then((celebDoc) => {
  res.locals.celebItem = celebDoc;
  res.render("../views/celebrities/show.hbs");
})
.catch((err) => {
  next(err);
});
});


router.get("/celebrities/:celebId/edit", (req,res,next)=>{
res.render("celebrities/edit.hbs")
})

// router.post("/celebrities/:celebId/edit", (req, res, next) => {
//   // bookid form reconstructing req.params
//   const {celebId } = req.params;
//   const { name, occupation, catchPhrase } = req.body;
//   // res.send(req.body);
//   Celebrity.findByIdAndUpdate(
//     celebId,
//     { $set: { name, occupation, catchPhrase } },
//     { runValidators: true }
//   )
//   .then((celebDoc) => {
//     res.redirect(`/celebrities/${celebId}`);
//   })
//   .catch((err) => {
//     next(err);
//     res.redirect(`/celebrities/:celebId/edit`);
//   });
// });

router.post("/process-edit/:celebId", (req, res, next) => {
  // bookid form reconstructing req.params
  const { celebId } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  // res.send(req.body);
  Celebrity.findByIdAndUpdate(
    celebId,
    { $set: { name, occupation, catchPhrase } },
    { runValidators: true }
  )
  .then((celebDoc) => {
    res.redirect(`/read?b=${Id}`);
  })
  .catch((err) => {
    next(err);
  });
});

router.get("/celebrities/:celebId/delete", (req,res, next) => {
  // get Id from URL
  // const bookId = req.params.bookId
  const { celebId } = req.params;

  Celebrity.findByIdAndRemove(celebId)
  .then((celebDoc) => {
    // redirect ONLY to URLs ("/books" instead of "book-page.hbs")
    res.redirect("/celebrities");
  })
  .catch((err) => {
    // show error page
    next(err);
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
    Celebrity.find().then(data => {
        res.render('celebrities/index.hbs', { celebritiesList: data });
    });
});

router.get('/new', (req, res) => {
    res.render('celebrities/new.hbs');
  });


router.post("/", (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body;

    Celebrity.create({
      name,
      occupation,
      catchPhrase
    })
      .then(data => {
        console.log(`Success! ${name} was added to the database.`);
        // res.redirect('/books');
        res.redirect(`/celebrities/${data._id}`);
      })
      .catch(err => {
        console.log("Error while adding a celebrity to the DB");
        next(err);
      });
  });


  router.get("/:celebrityId/edit", (req, res, next) => {
    const celebrityId = req.params.celebrityId;
    Celebrity.findById(celebrityId)
      .then(data => {
        // render the edit form with the data from the book
        res.render("celebrities/edit.hbs", { celebritiesList: data  });
      })
      .catch(err => {
        next(err);
      });
  });
  
  router.post("/:celebrityId", (req, res, next) => {
    
    const { name, occupation, catchPhrase } = req.body;

    Celebrity.findByIdAndUpdate(req.params.celebrityId, {
      name,
      occupation,
      catchPhrase
    })
      .then(data => {
        //   res.redirect('/books')
        res.redirect(`/celebrities/${data._id}`); // book._id === req.params.bookId
      })
      .catch(err => {
        next(err);
      });
  });


  router.post("/:celebrityId/delete", (req, res, next) => {
    const celebrityId = req.params.celebrityId;
    Celebrity.findByIdAndRemove(celebrityId).then(data => {
        res.redirect('/celebrities');
    });
});

  router.get('/:celebrityId', (req, res, next) => {
    const celebrityId = req.params.celebrityId;

    Celebrity.findById(celebrityId).then(data => {
        res.render('celebrities/show.hbs', { celebritiesList: data });
    });
});
module.exports = router;

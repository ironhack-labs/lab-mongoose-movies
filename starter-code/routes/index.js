const express = require('express');
const router = express.Router();
const Celebrities = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrities.find().then(celebrity => {
    res.render('celebrities', { celebrity })
  }).catch((err) => {
    console.log(err)
  })
})

router.get("/celebrities/show/:celebrityID", (req, res) => {
  Celebrities.findById(req.params.celebrityID, (err, celebrity) => {
    res.render('celebrities/show', celebrity)
  });
})

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/new-celebrity', (req, res) => {
  const celebrityName = req.body.nameForm;
  const celebrityOccupation = req.body.occupationForm;
  const celebrityCatch = req.body.catchForm;

  if (celebrityName === "" || celebrityOccupation === "" || celebrityCatch === "") {
    res.render('celebrities/new', { errorMessage: "Empty fields." });
    return
  }

  Celebrities.
    findOne({ name: celebrityName })
    .then(foundCelebrity => {
      if (foundCelebrity) {
        res.render('celebrities/new', { errorMessage: "This celebrity already exists!" });
        return
      } else {
        Celebrities
          .create({ name: celebrityName, occupation: celebrityOccupation, catchPhrase: celebrityCatch })
          .then(celebrityCreatedData => {
            res.redirect("/celebrities")
          })
      }
    })
})

router.post('/:id/delete', (req, res) => {
  Celebrities.findByIdAndRemove(req.params.id, (err, celebrity) => {
    res.redirect("/celebrities")
  });
})

router.post('/:id/edit', (req, res, next) => {
  Celebrities.findById(req.params.id, (err, celebrity) => {
    res.render('celebrities/edit', celebrity)
  });
});

router.post('/update/:id',(req, res, next) => {
  const celebrityName = req.body.nameForm;
  const celebrityOccupation = req.body.occupationForm;
  const celebrityCatch = req.body.catchForm;
  const id = req.params.id;
  if (celebrityName === "" || celebrityOccupation === "" || celebrityCatch === "") {
    res.render('celebrities', { errorMessage: "Empty fields." });
    return
  }
  Celebrities
  .findByIdAndUpdate(id, {
    name: celebrityName,
    occupation: celebrityOccupation,
    catchPhrase: celebrityCatch
  })
  .then(updatedData => {
    res.redirect('/celebrities/show/'+id);
  })
});


module.exports = router;

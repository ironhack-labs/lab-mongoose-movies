const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index.hbs');
});

router.get('/celebrities', (req, res) => {
  Celebrity.find({}).then(documents => {
    // this function runs WHEN the promise succeeds
    console.log(documents);

    // res.send(documents);
    res.render('celebrities.hbs', {
      celebrities: documents
    });

  }).catch(err => {
    // this function runs WHEN the promise rejects
    console.log(err)
  })

});

router.get('/celebrities/new', (req, res) => {

  res.render('new.hbs')
});

router.post('/new', (req, res) => {
  console.log(req.body);
  const {
    name,
    occupation,
    catchPhrase
  } = req.body;
  Celebrity.create({ // will take either an object or array of objects
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(() => {
    res.redirect('/celebrities');
  }).catch(err => {
    res.redirect("/celebrities/new")
  });
});

router.get('/celebrities/:id', (req, res) => {
  Celebrity.findById(req.params.id).then(documents => {
    // this function runs WHEN the promise succeeds
    console.log(documents);

    // res.send(documents);
    res.render('show.hbs', {
      celebrities: documents
    });

  }).catch(err => {
    // this function runs WHEN the promise rejects
    console.log(err)
  })

});


router.post("/celebrities/:id/delete", (req, res) => {
  Celebrity.findByIdAndRemove(req.params.id).then(documents => {
    // this function runs WHEN the promise succeeds
    console.log(documents);
    // res.send(documents);
    res.redirect('/celebrities');

  }).catch(err => {
    // this function runs WHEN the promise rejects
    console.log(err)
  })
});


router.get('/celebrities/edit/:id', (req, res) => {
  Celebrity.findById(req.params.id).then(documents => {
    res.render("celebrityEdit.hbs", {
      celebrity: documents
    });
  }).catch(err => {
    console.log(err);
  });


});


router.post('/celebrities/edit/:id', (req, res) => {
  Celebrity.updateOne({
    _id: req.params.id
  }, {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  }).then(() => {
    //  success!
    res.redirect('/celebrities/' + req.params.id);
  }).catch(err => {
    console.log(err);
  });
});


module.exports = router;
/* const router  = require('index.js');
const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find({})
  .then(celebrities => {
    console.log("found: ", celebrities);
    res.render('celebrities', { celebrities })
  })
  .catch(error => console.log(error));
})

router.get('/celebrities/show/:id', (req, res) => {
  Celebrity.findById(req.params.id).then(celebrity => {
    console.log(celebrity);
    res.render('celebrities/show', { celebrity });
  })
  .catch(err => console.log('Could not get celebrity details: ', err));
})

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new');

})

router.post('/celebrities', (req, res) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }).then(celeb => {
    res.redirect('/celebrities');
  })
  .catch(err => console.log("error while adding a celebrity: ", err));
})

router.post('/celebrities/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id).then(() => {
    console.log("Success");
    res.redirect('/celebrities');
  })
  .catch((err) => {
    console.log("error deleting celebrity: ", err);
    next();
  });
})


router.get('/celebrities/edit', (req, res) => {
  Celebrity.findById(req.query.celeb_id).then(celeb => {
    console.log(celeb);
    res.render('celebrities/edit', { celeb });
  }).catch((error) => {
    console.log(error);
  });
})

router.post('/celebrities/edit', (req, res) => {
  let { name, occupation, catchPhrase } = req.body;
  Celebrity.update({_id: req.query.celeb_id}, { $set: {name, occupation, catchPhrase }})
  .then((celeb) => {
    res.redirect('/celebrities');
  })
  .catch((error) => {
    console.log(error);
  });
}) */
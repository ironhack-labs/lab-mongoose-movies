var express = require('express');
const Celebrity = require('../models/celebrity');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
 
  Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err) }

    res.render('celebrities/index', { celebrities: celebrities
    });
  });
});


//Route To Create A Celebrity
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});


//Route to Post New Celebrity to Database
router.post('/', (req, res, next) => {
  var celebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.phrase
  }

  var newCeleb = new Celebrity(celebInfo)
  
  newCeleb.save( (err) => {
    if (err) { console.log(newCeleb.errors)
      return res.render('celebrities/new', { errors: newCeleb.errors }); }
    // redirect to the list of celebrities if it saves
    return res.redirect('/celebrities');
  });
});

//View Details of Celebrity
router.get('/:id', (req, res) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
    res.render('celebrities/show', { celebrity: celebrity });
  });
});

//Deletes Celebrity form database on Delete Button Click
router.post('/:id/delete', (req, res) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
    return res.redirect('/celebrities');
  });
});

//Edit A Celebrity Page
router.get('/:id/edit', (req, res) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, celebrity) => {
    if (err) { return next(err); }
    return res.render('celebrities/edit', {celebrity: celebrity});
  });
});

//Updates Celebrity based on Edits from Edit Celebrity Page
router.post('/:id', (req, res) => {
  var celebrityId =req.params.id
  const updates ={
    name: req.body.name,
    occupation: req.body.occupation, 
    catchPhrase: req.body.phrase
  }

Celebrity.findByIdAndUpdate(celebrityId, updates, (err, celebrity) => {
      if (err){ return next(err);}
      return res.redirect('/celebrities')
})
});


module.exports = router;

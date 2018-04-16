const express = require("express");
const router = express.Router();
//const debug = require("../log")(__filename);

const Celebrity = require("../models/Celebrity");



  router.get("/new", (req, res) => {
    res.render("celebrity/celebrity_new");
  });
  

router.post('/', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    const celebrity = new Celebrity({name, occupation, catchPhrase});
    celebrity.save().
    then(celebrity => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      res.render('celebrities/new')
    })
  }); 

  

router.post('/:id/delete', (req, res, next) => {
  let celebrity = req.params.id;
  Celebrity.findByIdAndRemove(celebrity)
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch(error => {
    next();
  })
});

router.get('/', (req, res, next) => {
    Celebrity.find().then(celebrities => {
      res.render('celebrities/index', {celebrities});
    })
  });

 
router.get('/:id/edit', (req, res, next) => {
  let celebrity = req.params.id;
  Celebrity.findById(celebrity).then(celebrity => {
    res.render('celebrities/edit', {celebrity});
  })
  .catch(err => {
    next();
    return err;
  })
});

 
 router.post('/:id', (req, res, next) => {
  let celebrity = req.params.id;
  const {name, occupation, catchPhrase} = req.body;
  const editCelebrity = {name, occupation, catchPhrase};
  Celebrity.findByIdAndUpdate(celebrity, editCelebrity)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      next();
      return err;
    })
});
  
router.get('/:id', (req, res, next) => {
    let celebrity = req.params.id;
    Celebrity.findById(celebrity).then(celebrity => {
      res.render('celebrities/show', {celebrity});
    })
  });

 
  module.exports = router;
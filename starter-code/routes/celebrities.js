const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity')



router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(allTheCelebritiesFromDB => {
      res.render('celebrities', { celebrities : allTheCelebritiesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from de DB: ', error)
    })

});

router.get("/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(theCelebrity => {
      res.render('celebrities/show', { celebrities: theCelebrity });
    })
    .catch(error => {
      console.log('Error while retrieving celebrities details: ', error);
    })
});


module.exports = router;
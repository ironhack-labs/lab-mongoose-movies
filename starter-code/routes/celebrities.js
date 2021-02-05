const express = require ('express');
const router = express.Router();
const Celebrity = require ('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({}, (err, celebs) => {
      if (err) { return next(err); }
      res.render('celebrities/index', { celebrities: celebs })
       });
  });

  router.get('/celebrities/:id', (req, res, next)=>{
    const id = req.params.id
    Celebrity.findById(id)
        .then(celebrity => {
            res.render('celebrities/show', celebrity)
        })
        .catch(err=>{
            next.call
            return err
        })
})

module.exports = router;
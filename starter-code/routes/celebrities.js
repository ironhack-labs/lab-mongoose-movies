const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");



router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(celebrities=>
        res.render('celebrities/index', { celebrities })
    .catch(err =>{next(err)}));
    });


router.get('/celebrities/show/:id', (req, res, next) => {
  
    Celebrity.find({_id:req.params.id})
    .then(celebrity=>
        res.render('celebrities/show', { celebrity })
    .catch(err =>{next(err)}));
    });

    


router.get('/celebrities/new',(req, res, next) => {
    Celebrity.findById()
    .then(celebrities=>
        res.render('celebrities/new', { celebrities })
    .catch(err =>{next(err)}));
}); 
router.post('/celebrities/:id/delete',(req, res) => {
  Celebrity.findByIdAndRemove()
  .then((celebrity) => {
    res.redirect('/celebrities/index');
  })
  .catch((error) => {
    res.redirect('/celebrities/new');
  })
});




module.exports = router
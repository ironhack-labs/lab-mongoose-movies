const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(celebrities=>
        res.render('celebrities/index', { celebrities })
    .catch(err =>{next(err)}));
});
router.get('routes/celebrities/:id', (req, res, next) => {
    res.render('celebrities/new')
});

router.get('routes/celebrities/new',(req, res, next) => {
    Celebrity.findById()
    .then(celebrities=>
        res.render('celebrities/show', { celebrities })
    .catch(err =>{next(err)}));
}); 
router.post('routes/celebrities',(req, res) => {
    res.send('You\'ve logged in!');
  });



module.exports = router
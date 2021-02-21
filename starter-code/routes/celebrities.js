const express = require ('express');
const router = express.Router();
const Celebrity = require ('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({}, (err, celebs) => {
      if (err) { return next(err); }
      res.render('celebrities/index', { celebrities: celebs })
       });
  });

  router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new')
  
  })

  router.post('/celebrities/new', (req, res, ) => {
    const celebrity = new Celebrity (req.body)
    celebrity.save()
    .then(c => res.redirect("/celebrities"))
  .catch(e => res.redirect("/celebrities/new"))
})


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


router.post("/celebrities/:id/delete", (req, res, next) => {
  const id = req.params.id
  Celebrity.findByIdAndRemove(id)
  .then(() => {
   res.redirect("/celebrities");
  }) 
  .catch((e)=> next(e));
});
  


module.exports = router;
const express = require('express');
const router  = express.Router();
const Celebrity  = require('../models/Celebrity');


router.get('/celebrities', (req, res, next)=>{
  Celebrity.find()
  .then((celebrities)=>{
      res.render('celebrities/celebrity-index', {celebrities})
  })
  .catch((err)=>{
      next(err);
  })
})

router.get('/celebrities/new', (req, res, next)=>{
  res.render('celebrities/new-celeb');
})

router.post('/celebrities/new', (req, res, next)=>{
  Celebrity.create(req.body)
  .then(()=>{
    res.redirect('/celebrities')
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/celebrities/:id/delete', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.id)
  .then((x)=>{
    // console.log(x, "JHSJHSJHSJH");
    res.redirect("/celebrities")
  })
  .catch((err)=>{
    next(err)
  })

})

router.get('/celebrities/:id', (req, res, next)=>{
  Celebrity.findById(req.params.id)
  .then((celebrities)=>{
      res.render('celebrities/celebrity-details', celebrities);
        // res.render('celebrities/celebrity-details', celebrities)
  })
  .catch((err)=>{
      next(err);
  })
})

// router.get('/celebrities/5bec73d9ca4db9dcc3d7b797', (req, res, next)=>{
//   res.render('celebrities/celebrity-details')
  
// })




module.exports = router;


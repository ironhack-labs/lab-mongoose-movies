const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity-model");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
/**************************CELEBRITIES*********************** */
router.get('/celebrities', (req, res, next)=>{
  Celebrity.find()
  .then((allTheCelebs)=>{
      res.locals.theirList = allTheCelebs;
      res.render('celebrities/c-index');
  })
  .catch((err)=>{
      next(err);
  })
});

router.get('/celebrity/:celebId', (req, res, next)=>{
  Celebrity.findById(req.params.celebId)
  .then((celebDetails)=>{
    res.locals.details = celebDetails;
    res.render('celebrities/show');
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/celebrities/new', (req, res, next)=>{
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next)=>{
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({name, occupation, catchPhrase})
  .then(()=>{
    res.redirect("celebrities");
  })
  .catch((err)=>{
    res.render('celebrities/new');
  })
});

router.get('/delete/celebrity/:celebId', (req, res, next)=>{
  Celebrity.findByIdAndRemove(req.params.celebId)
  .then(()=>{
    res.redirect('/celebrities');
  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/edit/celebrity/:celebId', (req, res, next)=>{
  Celebrity.findById(req.params.celebId)
  .then((celebDetails)=>{
    res.locals.celebId = req.params.celebId;
    res.locals.thisCeleb = celebDetails;
    res.render("celebrities/updating")
  })
  .catch((err)=>{
    next(err);
  })
})

router.post('/edit-process/celebrity/:celebId', (req, res, next)=>{
  const { name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(
    req.params.celebId,
    { name, occupation, catchPhrase },
    { runValidators: true }
  )
  .then(()=>{
    res.redirect(`/celebrity/${req.params.celebId}`);
  })
  .catch((err)=>{
    next(err);
  })
});
 
module.exports = router;

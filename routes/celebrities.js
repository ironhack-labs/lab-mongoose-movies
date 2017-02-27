const express = require('express');
const Celebrity = require('../models/celebrity.js');

const router = express.Router();

router.get('/celebrities', (req,res,next)=>{
  Celebrity.find((err, celebrities)=>{
    if (err){
      next(err);
      return;
    }
    res.render('celebrities/index',{
      celebrities: celebrities
    });
  });
});

router.post('/celebrities',(req,res,next)=>{

  const celebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const theCelebrity = new Celebrity(celebInfo);

  theCelebrity.save((err)=>{
    if(err){
      next(err);
      return;
    }

    res.redirect('/celebrities');
  });

});

router.get('/celebrities/new',(req,res,next)=>{

  res.render('celebrities/new');

});



router.get('/celebrities/:id',(req,res,next)=>{
  const celebId = req.params.id;

  Celebrity.findById(celebId,(err, celebDoc)=>{
      if(err){
        next(err);
        return;
      }
    res.render('celebrities/show', {celebrity: celebDoc});
  });
});

router.post('/celebrities/:id',(req,res,next)=>{
  const celebId = req.params.id;

  const celebUpdates = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrity.findByIdAndUpdate(celebId, celebUpdates, (err, celeb)=>{
    if(err){
      next(err);
      return;
    }

    res.redirect('/celebrities');
  });
});

router.get('/celebrities/:id/edit',(req,res,next)=>{
  const celebId = req.params.id;

  Celebrity.findById(celebId, (err, celebDoc)=>{
    if(err){
      next(err);
      return;
    }
    res.render('celebrities/edit',{celebrity: celebDoc});
  });


});

//Get route for delete page.
//Takes advantage of generic routes.
router.get('/celebrities/:id/delete',(req,res,next)=>{
  const celebId = req.params.id;

  Celebrity.findByIdAndRemove(celebId,(err, product)=>{
    if(err){
      next(err);
      return;
    }
    res.redirect('/celebrities');
  });
});

module.exports = router;

const express = require('express');
const Celebrity = require('../models/celebrity.js');

const router = express.Router();

//Get route for the celebrities index page. that renders the
// celebrites/index.ejs view.
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

//Post route for the celebrities index page that redirects
// to the same index page
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

//Post route for the views/celebrities/:id view that gets invoked
// when user edits a celebrity
//Takes advantage of generic routes.
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


//Get route for the celebrities/edit view.
//Takes advabtage of generic routes.
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

//Post route for delete.
//Takes advantage of generic routes.
router.post('/celebrities/:id/delete',(req,res,next)=>{
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

/*jshint esversion: 6*/

const express = require("express");
const router = express.Router();

const Celebrities = require("../models/celebrities");


router.get('/',(req, res, next) => {
  Celebrities.find({},(err,celebrities) => {
    if (err) {
      next(err);
    } else {
      res.render('celebrities/index',{celebrities: celebrities});
    }
  });

});

router.get('/a/:id',(req, res, next) => {
    Celebrities.findById(req.params.id, (err, celebrity) => {
      if (err) { next(err); }
      res.render('celebrities/show', { celebrity: celebrity} );
    });
});

router.get('/new',(req, res, next) => {
    res.render('celebrities/new');
});

router.post('/',(req, res, next) => {
    const celebrityInfo = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
    };

    const newCelebrity = new Celebrities(celebrityInfo);
    newCelebrity.save((err)=>{
      if (err) { next(err); } else {
        res.redirect('/celebrities');
      }
    });

});

router.get('/a/:id/delete',(req, res, next) => {
    Celebrities.findByIdAndRemove(req.params.id, (err)=>{
      if (err) { next(err); } else {
          res.redirect('/celebrities');
      }
    });
});


router.get('/a/:id/edit',(req, res, next) => {
    console.log(req.params.id);
    Celebrities.findById(req.params.id, (err, celebrity) => {
      if (err) { next(err); }
      res.render('celebrities/edit', { celebrity: celebrity} );
    });
});




router.post('/a/:id/',(req, res, next) => {
  const newCelebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  Celebrities.findByIdAndUpdate(req.params.id, newCelebrityInfo ,(err, celebrity) => {
    if (err) { next(err); }
    res.redirect('/celebrities');
  });
});


module.exports = router;

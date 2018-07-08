const express = require('express');
const router = express.Router();

var Celebrity = require('../models/celebrity');

router.get('/', (req, res, next)=>{
   Celebrity.find({},(err, celebrities)=>{
        if(err){
            next(err);
        } else {
            res.render('celebrities/index', { celebrities });
        }
    });
   
});
router.get('/new', (req,res,next)=>{
    res.render('celebrities/new');
});

router.post('/', (req, res, next)=>{
     const newCelebrityInfo = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPurchase: req.body.catchPurchase
     };
    const newCelebrity = new Celebrity(newCelebrityInfo);

    newCelebrity.save((err)=>{
        if(err){
        next(err);
      } else {
        res.redirect('/celebrities');  
      }
    });
     
});
router.post('/:id/delete',(req, res, next)=>{
    const celebID = req.params.id;
    
    Celebrity.findByIdAndRemove(celebID,(err, celebrity)=>{
        if(err){
            next(err);
        } else {
            res.redirect('/celebrities');
        }

    });

});

router.get('/:id/edit', (req, res, next)=>{
    const celebID = req.params.id;
    
    Celebrity.findById(celebID, (err, celebrity)=>{
      if(err){
             next(err);
        }else {
           res.render('celebrities/edit', {celebrity});
        }
     });
});
router.post('/:id/edit', (req, res, next)=>{
    const celebID = req.params.id;
    const updates = {
        name : req.body.name,
        occupation: req.body.occupation,
        catchPurchase: req.body.catchPurchase
    };
    Celebrity.findByIdAndUpdate(celebID, updates, (err, celeb)=>{
        if(err){
            next(err);
        } else {
            res.redirect(`/celebrities/${celebID}`);
        }
    })

});
router.get('/:id', (req, res, next)=>{
        const celebrityID = req.params.id;

    Celebrity.findById(celebrityID, (err, celebrity)=>{
        if(err){
            next(err);
        }else {
            
            res.render('celebrities/show', {celebrity});
        }
    });
});



module.exports = router;
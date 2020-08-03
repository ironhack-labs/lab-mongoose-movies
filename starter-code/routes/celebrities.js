const express = require('express')
const router = express.Router()
const CelebrityModel = require('../models/celebrity.model');

router.get('/celebrities',(req,res,next)=>{
    CelebrityModel.find()
      .then((celebrities)=>{
        res.render('celebrities/index.hbs',{celebrities});
      })
      .catch(()=>{
        next();
      })
});
router.get('/celebrities/:id',(req,res,next)=>{
  CelebrityModel.findById(req.params.id)
    .then((celebrity)=>{
      res.render('celebrities/show.hbs',{celebrity});
    })
    .catch(()=>{
      next();
    })
});
router.get('/celebrities/new',(req,res,next)=>{
  res.render('celebrities/new.hbs');
});
router.post('/celebrities',(req,res,next)=>{
  CelebrityModel.create(req.body)
    .then((celebrity)=>{
      res.redirect('/celebrities');
    })
    .catch(()=>{
      res.render('celebrities/new.hbs')
    })
});
router.post('/celebrities/:id/delete',(req,res,next)=>{
  CelebrityModel.findByIdAndDelete(req.params.id)
    .then(()=>{
      res.redirect('/celebrities');
    })
    .catch(()=>{
      next();
    })
});
router.get('/celebrities/:id/edit',(req,res,next)=>{
  CelebrityModel.findById(req.params.id)
    .then((celebrity)=>{
      res.render('celebrities/edit.hbs',{celebrity});
    })
    .catch(()=>{
      next();
    })
});
router.post('/celebrities/:id',(req,res,next)=>{
  CelebrityModel.findOneAndUpdate(req.params.id, req.body)
    .then(()=>{
      res.redirect('/celebrities');
    })
    .catch(()=>{
      next();
    })
});
module.exports = router;
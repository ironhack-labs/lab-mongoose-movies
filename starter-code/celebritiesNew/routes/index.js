const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/*Get celebrities page*/
router.get('/celebrities',(req,res,next)=>{
  Celebrity.find()
  .then(celebrities=>{
    res.render('celebrities',{celebrities});
  }).catch(e =>{
    console.log(e)
  })
  
});

/*Get celebrities details page*/
router.get('/celebrities/:id',(req,res,next)=>{
  let _id = req.params.id

  Celebrity.findById({_id})
  .then(celebrity=>{
    res.render("celebrity-detail",celebrity)
  })
})

/*Get celebrity-form page*/
router.get('/new',(req,res,next)=>{
  res.render('celebrity-form')
})

/*get celebrity and delete from database*/

router.post('/:id/delete',(req,res,next)=>{
    let _id = req.params.id;
    Celebrity.findByIdAndRemove(_id,(err,docs)=>{
      if(err){
       next();
        return;
      }else{
        res.redirect('/celebrities')
    }
  });
});

router.get('/:id/edit',(req,res,next)=>{
  let _id = req.params.id;
  Celebrity.findById (_id,(err,docs)=>{
    if(err){
      next();
      return;
    }else{
      res.render('edit',{_id});
    }
  });
});

router.post('/:id/edit', (req, res, next) => {
      let _id = req.body.id;
      let _name = req.body.name;
      let _occupation = req.body.occupation;
      let _catchPhrase = req.body.catchPhrase;
      Celebrity.findByIdAndUpdate(req.params.id, {
          name: _name,
          occupation: _occupation,
          catchPhrase: _catchPhrase
      }, (err) => {
          if (err) {
              console.log(err);
              next();
              return;
          } else {
              res.redirect('/celebrities')
          }
      });
  });



module.exports = router;

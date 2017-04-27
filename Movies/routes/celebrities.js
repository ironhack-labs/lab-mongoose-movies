var express = require('express');
var router = express.Router();
const Celebrity = require ('../models/celebrity');


router.get('/', function(req, res, next) {

  Celebrity.find({}, (err , celebrities)=>{
    if (err){
      next(err)
    }else{
      console.log(celebrities);
     res.render('celebrities/index', {celebrities: celebrities});
    }
  })

});

router.get('/new',(req, res, next)=>{
  res.render('celebrities/new')
})

router.post('/',(req, res, next)=>{
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  }

  const newCelebrity = new Celebrity(celebrityInfo)
  newCelebrity.save ( (err) =>{
    if (err){
      next(err)
    }
      res.redirect('/celebrities')
  })

})



router.get('/:id',(req, res, next)=>{
  Celebrity.findById(req.params.id, (err, celebrity)=>{
    if(err){
      next(err)
    }
    res.render("celebrities/show", {celebrity});
  })
})


router.get('/:id/delete',(req,res,next)=>{
  const id = req.params.id
  Celebrity.deleteOne({_id: id},(err)=>{
    if (err){
      next(err)
    }
    res.redirect('/celebrities')
  })

})




router.get('/:id/edit', (req,res, next)=>{
  Celebrity.findById(req.params.id, (err,celebrity)=>{
    if (err){
      next(err)
    }
    console.log(celebrity);
    res.render('celebrities/edit',{celebrity: celebrity})
  })
})




router.post('/:id', (req,res, next)=>{
  const celebrityInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  }

  Celebrity.findByIdAndUpdate(req.params.id,celebrityInfo ,(err,celebrity)=>{
    if (err){
      next(err)
    }
    console.log(celebrity);
    res.redirect('/celebrities')
  })
})









module.exports = router;

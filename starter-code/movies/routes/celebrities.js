var express = require('express');
const Celebrity = require('../models/Celebrity');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get("/",(req,res,next)=>{
    Celebrity.find({}, (err,docs)=>{
        if(err){
            next();
            return;
        }else{
           // console.log("8===========D")
            console.log(docs);
            res.render("celebrities/index", {celeb:docs});
        }
      });
});

// SI PONGO ESTA DESPUES DE SHOW NO ME LO MUESTRA
router.get("/new", (req, res, next) => {
    res.render("celebrities/new");
});


router.get("/:id",(req,res,next)=>{
    const id= req.params.id;
    Celebrity.findById(id,(err,doc)=>{
      //  console.log("8===========D")
      res.render ("celebrities/show",{celeb:doc});
    })
});


router.get("/:id/edit", (req,res,next)=>{
    const id=req.params.id;
    console.log(id);
    Celebrity.findById(id,(err,doc)=>{
        if (err){
            next();
            return err;
        }else{
            res.render("celebrities/edit",{celeb:doc});
        }
    });
});



router.post('/:id', (req, res, next) => {
    const productId = req.params.id;
  
    const updatedCeleb={
        name:req.body.name,
        occupation:req.body.occupation,
        catchPhrase:req.body.catchPhrase
    };
    Celebrity.findByIdAndUpdate(productId, updatedCeleb, (err, product) => {
      if (err){ return next(err); }
      return res.redirect('/celebrities');
    });
  });



router.post("/:id/delete", (req,res,next)=>{
    const id=req.params.id;
    Celebrity.findByIdAndRemove(id,(err,doc)=>{
        if (err){
            next();
            return err;
        }else{
            res.redirect("/celebrities");
        }
    })
});


  router.post("/",(req,res,next)=>{
      const newCeleb=new Celebrity({
          name:req.body.name,
          occupation:req.body.occupation,
          catchPhrase:req.body.catchPhrase
      });
      newCeleb.save((err,celeb)=>{
          if (err){
            res.redirect("celebrities/new");
          }else{
            res.redirect("celebrities");
          }
          
      });

  })





module.exports = router;

const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      console.log("All my celebrities" + celebrities);
      res.render("celebrities/index", { allCelebrities: celebrities });
    })
    .catch((err) => {
      console.log("Error happened while loading celebrities");
    });
});

//CREATE
router.get("/new", (req, res) => {
  res.render("celebrities/new");
});
//CREATE
router.post("/new", (req, res) => {
  console.log(req.body);
  let celebrity = new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  });
  celebrity
    .save()
    .then(() => {
      res.redirect("/celebrities");
    })
    
});


//Show celebrities details
router.get("/:id", (req, res) => {
  Celebrity.findById(req.params.id).then((celebrity) => {
    res.render("celebrities/show", { celebrityDetails: celebrity });
  });
});
//DELETE
router.post('/:id/delete',(req,res)=>{
  Celebrity.findByIdAndDelete(req.params.id).then(()=>{
    res.redirect('/celebrities')
  })
})

//UPDATE OR EDIT
router.get('/:id/edit',(req,res)=>{
  // let promise1=Celebrity.findById(req.params.id)
  Celebrity.findById(req.params.id)
  .then((celebrity)=>{
    res.render('celebrities/edit',{myCelebrity:celebrity})
    //return celebrity
  })
  // let promise2=Celebrity.find()
  // .then((celebrity)=>{
  //   return celebrity
  // //   console.log(celebrity)
  // //   res.render('celebrities/edit',{celibrityOccupation:celebrity.occupation})
  // })
  // Promise.all([promise1,promise2]).then((celebrity)=>{
  //   console.log(celebrity);
  //   res.render('celebrities/edit',{myCelebrities:celebrity})
  // })
  
})
router.post('/:id/edit',(req,res)=>{
  console.log('req.body', req.body)
  Celebrity.findByIdAndUpdate(req.params.id,
    {
      name:req.body.name,
      occupation:req.body.occupation,
      catchPhrase:req.body.catchPhrase,
    }).then(()=>{
      res.redirect('/celebrities')
    })
})

module.exports = router;

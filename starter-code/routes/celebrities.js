const express = require("express"); 
const router =  express.Router(); 
const celebrityModel = require("../models/celebrity"); 


// GET 
router.get("/", (req, res, next)=>{
  celebrityModel
  .find({})
  .then((dbResponse)=>{
      res.render("celebrities/index.hbs", {
        celebrities: dbResponse,
      })
  })
  .catch((err)=>{
    console.log(err)
  })
  });

    router.get("/new", (req, res) => {
      res.render("celebrities/new.hbs")
    })

  router.get("/:id", (req, res, next)=>{
    celebrityModel
    .findById(req.params.id)
    .then((dbResp)=>{
          res.render("celebrities/show.hbs",
          {celebrities : dbResp,})
        })
    .catch((err)=>{
      next(err);
    })
  });



// POST

router.post("/", (req, res)=>{
  celebrityModel.create(req.body)
  .then((dbResp)=>{
      celebrityModel.find({})
      .then((dbResp)=>{
              res.render("celebrities/index.hbs",
              {celebrities: dbResp})
            })
      .catch((err)=>{
              res.redirect("celebrities/new.hbs")
              console.log(err); 
            });
  })
.catch((err)=>{
  console.log(err)
});
});

router.post("/:id/delete", (req, res, next)=>{
  celebrityModel.findByIdAndDelete(req.params.id)
  .then((dbResp)=>{
    res.redirect("/celebrities")
  })
  .catch((err)=>{
    next(err)
  })
});

router.get("/:id/edit", (req, res, next) => {
  celebrityModel.findById(req.params.id)
  .then((dbResp)=>{
res.render("celebrities/edit", {
  celebrity: dbResp
})
  })
  .catch((err) => {
    next(err)
  })
});

router.post('/:id', (req, res, next) => {
  if (req.body.name ==="" || req.body.occupation ==="" || req.body.catchPhrase ===""){
      celebrityModel.findById(req.params.id)
          .then((dbResp)=>{
            res.render("celebrities/edit", {
              celebrities: dbResp,
              error: "You need to fill all the form!" 
            })
          })
          .catch((err)=>{
              console.log(err)
          })
  } else {
        celebrityModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
            .then((dbResp)=>{
              res.redirect("/celebrities")
            })
            .catch((err)=>{
             console.log(err)
            })
 }
})

  module.exports =router; 
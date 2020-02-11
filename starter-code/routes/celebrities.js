var express = require("express");
var celebritiesRouter = express.Router();

const Celebrity = require("./../models/celebrityModel");

celebritiesRouter.get("/",(req,res,next) => {

  Celebrity.find()
.then((allCelebrities) => {
  
console.log(allCelebrities);
const data ={celebs: {...allCelebrities}};
  
  res.render("celebrities/index", data);

}).catch((err) => console.log(err));
});


celebritiesRouter.get("/new",(req,res,next) => {
  res.render("celebrities/new");
});

celebritiesRouter.post("/new", (req,res,next) => {
  const {name , occupation , catchPhrase} = req.body;
  Celebrity.create({name , occupation , catchPhrase})
  .then(() => {
    res.redirect("/celebrities");
  }).catch((err) => {
    console.log(err);
  });
})


celebritiesRouter.post("/:id/delete", (req,res,next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect("/celebrities")
  }).catch((err) => {
  console.log(err);    
  });
})

celebritiesRouter.post("/:id",(req,res,next) => {
const {name , occupation, catchPhrase} = req.body;

Celebrity.update({name , occupation, catchPhrase})
.then(() => {
  res.redirect("/celebrities")
}).catch((err) => {
  console.log(err);
});
})

celebritiesRouter.get("/:id/edit",(req,res,next) => {
  Celebrity.findById(req.params.id)
  .then((oneCeleb) => {
      const data={
        celebrity:oneCeleb
      }

    res.render("celebrities/edit",data);
  }).catch((err) => {
    
  });
})

celebritiesRouter.get("/:id",(req,res,next) => {
  Celebrity.findById(req.params.id)
  .then((celebrityId) => {
    const data ={
      celeb:celebrityId
    };
    res.render("celebrities/show",data)
  }).catch((err) => {
    console.log(err);
  });
});


module.exports = celebritiesRouter;
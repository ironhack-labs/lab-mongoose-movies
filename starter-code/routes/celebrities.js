var express = require("express");
var celebritiesRouter = express.Router();

const Celebrity = require("./../models/Celebrity");

celebritiesRouter.get('/',(req, res)=>{
  Celebrity.find()
  .then(allCelebrities =>{
    const data = {
      celebrities: allCelebrities
    };
    console.log(data.celebrities);
    
    res.render(`celebrities`,data);
  })
  .catch(err => console.log(err));
});

celebritiesRouter.get('/new',(req, res)=>{
  res.render('./../views/celebrities/new');
});

celebritiesRouter.post('/new',(req, res)=>{
  const {name, occupation, catchPhrase} = req.body;
  Celebrity.create({name, occupation, catchPhrase})
  .then(newCelebrity =>{
    res.redirect("/celebrities");
  })
  .catch(err => console.log(err));
});

celebritiesRouter.get('/:id',(req,res)=>{
  Celebrity.findById(req.params.id)
  .then((oneCelebrity)=>{
    const data={
      celebrity: oneCelebrity
    }
    res.render(`celebrities/show`,data);
  })
  .catch(err => console.log(err));
});

module.exports = celebritiesRouter;
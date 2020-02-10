var express = require('express');
var celebritiesRouter = express.Router();

const Celebrity = require('../models/celebrity');



// Route GET '/' --> 'views/celebrities/index'
celebritiesRouter.get('/', (req, res)=>{
  Celebrity.find()
    .then(allCelebrities => {
      const data = {
        celebrities: {...allCelebrities}
      };
      
      res.render('celebrities/index', data);
    })
    .catch(err => console.log(err));
    
})

//Route Post delete
celebritiesRouter.post('/celebrities/:_id/delete', (req,res)=>{
  Celebrity.findByIdAndRemove(req.body._id)
  .then(()=> {
    res.render('/celebrities')
  })
  .catch(err => {
    console.log(err);
  })
})



//Route GET '/celebrities/new' --> views/celebrities/new
celebritiesRouter.get('/new', (req, res)=> {
  res.render('celebrities/new');
})




// // Route POST create /celebrities
celebritiesRouter.post('/new', (req,res)=>{
  const {name, occupation, catchPhrase} = req.body;

  Celebrity.create({name, occupation, catchPhrase})
  .then(()=> {
    res.redirect('/celebrities');
  })
  .catch(err => {
    console.log(err);
    
  } )
})



// Route GET '/celebrities/:id' --> views/celebrities/show
celebritiesRouter.get('/:_id', (req, res)=>{
  
  // console.log(`req.params`);
  

  Celebrity.findById(req.params._id)
    .then(oneCeleb => {
      const data = {
        id: oneCeleb
      };
      res.render('celebrities/show', data)
    })
    .catch(err => console.log(err));
})


module.exports = celebritiesRouter;
const express = require('express');
const Celebrity = require('../models/celebrity');
const router = express.Router();


/*router.get('/' , ( req, res, next ) => {
    console.log("inside celebrities");
    Celebrity.find( {}, (err, celebrities ) =>{
      console.log("error");
    if(err){

      next(err);
    }else{
      console.log(celebrities);
      res.render('celebrities/index', { celebrities });
    }
  });
});*/


router.get('/new' , (req, res, next) => {

  res.render('celebrities/new');

});


router.get('/:id/edit' , (req, res, next) => {
  const idToEdit = req.params.id;
  console.log("inside edit");
  Celebrity.findById( idToEdit, (err, celebrity) => {
    if(err){
      next(err);
    }else{
      res.render('celebrities/edit', { celebrity });
    }
  });
});

router.post('/:id/edit', (req, res, next) => {
  const idToEdit = req.params.id;

  const editedData = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  }
  Celebrity.findByIdAndUpdate( idToEdit , editedData , ( err, celeb ) => {
    if(err){
      next(err);
    }else{
      //res.send("hello");
      res.redirect('/celebrities/' + idToEdit);
    }
  });
});


router.get('/', (req, res, next) => {
  console.log("inside index");
  // Iteration #2
  Celebrity.find({}, (err, celebrities) => {
      if (err) {
        next(err);
      } else {
        console.log(celebrities);
        res.render('celebrities/index', { celebrities } );
      }
    });
});


router.post('/:id/delete', (req, res, next) => {
  const idToDelete = req.params.id;
  Celebrity.findByIdAndRemove(idToDelete, ( err, celebrity ) => {
    if(err){
      next(err);
    }else{
      res.redirect('/celebrities');
    }
  });
});

router.post('/', (req, res, next) => {
  const celebData = {
    name : req.body.name,
    occupation : req.body.occupation,
    catchPhrase : req.body.catchPhrase
  }
  const newCeleb = new Celebrity ( celebData );
  newCeleb.save(( err) => {
    if(err){
      //return next(err);
      res.render('celebrities/new');
    }else{
        res.redirect('/celebrities');
    }
  });
});


//  why does it go in here for router.get('/new')?
//CastError: Cast to ObjectId failed for value "foo" at path "_id".

router.get('/:id', (req, res, next) => {
  const myId = req.params.id;
  // Iteration #2
  Celebrity.findById(myId, (err, celebrity) => {
      if (err) {
        next(err);
      } else {
        console.log("inside show details");
        res.render('celebrities/show', { celebrity } );
      }
    });
});




/*router.get('/', (req, res, next) => {
  // Iteration #2
  Celebrity.find({}, (err, celebrities) => {
      if (err) {
        return next(err);
      }
        console.log(celebrities);
        res.render('celebrities/index', { celebrities } );

    });
});*/


module.exports = router;

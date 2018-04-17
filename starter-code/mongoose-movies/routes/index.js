const express = require('express');
const router  = express.Router();
const Celebrity = require( "../models/celebrity" );

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// CELEBRITIES LIST PAGE
// ---------------------

router.get( "/celebrities", ( req, res, next ) => {
  Celebrity.find()
    .then(( celebritiesFromDb ) => {
      res.locals.celebList = celebritiesFromDb;
      res.render( "celebrities/index" );
    })
    .catch(( err ) => {
      next( err );
    })
})


// CELEBRITIES DELETE
// ---------------------

router.get( "/celebrities/:id/delete", ( req, res, next ) => {
  Celebrity.findByIdAndRemove( req.params.id )
    .then(() => {
      res.redirect( "/celebrities" );
    })
    .catch(( err ) => {
      next( err );
    });
})



// CELEBRITIES NEW PAGES
// ---------------------

router.get( "/celebrities/new", ( req, res, next ) => {
  res.render( "celebrities/new" );
})

router.post( "/celebrities", (req, res, next ) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
  .then(() => {
    res.redirect( "/celebrities" );
  })
  .catch(( err ) => {
    next( err );
  })
})


// CELEBRITIES EDIT PAGES
// ----------------------

router.get( "/celebrities/:id/edit", ( req, res, next ) => {
  Celebrity.findById( req.params.id )
    .then(( info ) => {
      res.locals.celebId = req.params.id;
      res.locals.celebInfo = info;
      res.render( "celebrities/edit" );
    })
    .catch(( err ) => {
      next( err );
    });
})

router.post( "/celebrities/:id", ( req, res, next ) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(
    req.params.id,
    { name, occupation, catchPhrase },
    { runValidators: true }
  )
    .then(() => {
      res.redirect( `/celebrities/${ req.params.id }`)
    })
    .catch(( err ) => {
      next( err );
    });
})




// CELEBRITIES DETAILS PAGE
// ------------------------

router.get( "/celebrities/:id", ( req, res, next ) => {
  Celebrity.findById( req.params.id )
      .then(( celebrityDetails ) => {
      res.locals.celebDetails = celebrityDetails;
      res.render( "celebrities/show" );
      })
      .catch(( err ) => {
      next( err );
      });
  })


module.exports = router;

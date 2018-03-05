const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/celebrities', (req, res, next) => {
    Celebrity.find({}, (err, celebrities) => {
        if (err) {return next(err) }

        res.render('celebrities/index', {
            celebrities: celebrities
        });
    });
});

// Show Celebrity Details
router.get('/celebrities/:id/show', (req, res, next) => {
    const celebrityId = req.params.id;

    Celebrity.findById(celebrityId, (err, celebrity) => {
        if (err) { return next(err); }
        res.render('celebrities/show', { celebrity: celebrity 
        });
      });
  });

  // Route Handler for New Product Form - GET
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');
});

// Route Handler for New Celebrity - POST
router.post('/celebrities', (req, res, next) => {
    // Take the params and translate them into a new object
    const celebInfo = {
        name: req.body.name,
        occupation: req.body.occupation,
        imageUrl: req.body.imageUrl,
        catchPhrase: req.body.catchPhrase
    }

    // Create a new Celebrity with the Params passed
    // in from the "/celebrity/new" form
    const newCeleb = new Celebrity(celebInfo);

    newCeleb.save( (err) => {
        // Error Handling
        if (err) { return next(err) }

        // Redirect to the Celebrities List (/celebrities)
        // if it saves.
        return res.redirect('/celebrities');
    });
}); 

//Delete a Celebrity
router.post('/celebrities/:id/delete', (req, res, next) => {
    const id = req.params.id;
  
    Celebrity.findByIdAndRemove(id, (err, celebrity) => {
      if (err){ return next(err); }
      return res.redirect('/celebrities');
    });
  
  });


// Show Form to Update Celebrity
router.get('/celebrities/:id/edit', (req, res, next) => {
    const celebrityId = req.params.id;
  
    Celebrity.findById(celebrityId, (err, celebrity) => {
      if (err) { return next(err); }
      res.render('celebrities/edit', { celebrity: celebrity });
    });
  });

router.post('/celebrities/:id', (req, res, next) => {
    const celebrityId = req.params.id;

    /*
     * Create a new object with all of the information from the request body.
     * This correlates directly with the schema of Product
     */
    const updates = {
        name: req.body.name,
        occupation: req.body.occupation,
        imageUrl: req.body.imageUrl,
        catchPhrase: req.body.catchPhrase
    };
  
    Celebrity.findByIdAndUpdate(celebrityId, updates, (err, celebrity) => {
      if (err){ return next(err); }
      return res.redirect('/celebrities');
    });
  });

module.exports = router;

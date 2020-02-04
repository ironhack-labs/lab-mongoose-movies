const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');

//1. Iteration #2: Listing Our Celebrities
// Show all celebrities list
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebritiesFromDB => {
      // console.log('celebritiesFromDB: ', celebritiesFromDB);
      res.render('celebrities/celebrities', { celebrities: celebritiesFromDB });
    })
    .catch(err => next(err));
});

//3. Iteration #4: Adding New Celebrities
router.get('/celebrities/add-new', (req, res, next) => {
  res.render('celebrities/new-celebrity');
});
//4. Using Post get requested celebrity, create celebrity
//and redirect to /celebrities to display list of celebrities
router.post('/celebrities/create', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  if (name === '' || occupation === '' || catchPhrase === '') {
    res.render(`celebrities/new-celebrity`, {
      errorMsg: 'Please fill all the inputs and try again!',
    });
    return;
  }
  Celebrity.create(req.body)
    .then(celebrityFromDB => {
      res.redirect(`/celebrities`);
    })
    .catch(err => {
      next(err);
    });
});

//5. Iteration #5: Deleting Celebrities
//Delete celebrities, use POST request
router.post('/celebrities/:theId/delete', (req, res) => {
  Celebrity.findByIdAndRemove(req.params.theId)
    .then(data => {
      // console.log(`${data} successfully removed from DB`);
      res.redirect('/celebrities');
    })
    .catch(err =>
      console.log(`Error accrued while trying to remove the celebrity ${err}`)
    );
});

//6.Iteration 6 | (Bonus): Editing Celebrities
// |
router.get('/celebrities/:theId/edit', (req, res) => {
  console.log(req.url);
  Celebrity.findById(req.params.theId)
    .then(theCelebrity => {
      Celebrity.find()
        .then(allCelebrities => {
          res.render('celebrities/edit-celebrity', {
            celebrity: theCelebrity,
            allCelebrities,
          });
        })
        .catch(err =>
          console.log(
            `Error happened while trying to get files for edit ${err}`
          )
        );
    })
    .catch(err =>
      console.log(`Error happened while trying to edit file ${err}`)
    );
});
//
router.post('/celebrities/:theId/update', (req, res) => {
  Celebrity.findByIdAndUpdate(req.params.theId, req.body)
    .then(update => {
      res.redirect(`/celebrities/${req.params.theId}`);
    })
    .catch(err => console.log('Err while updating in DB:', err));
});

//2. Iteration #3: The Celebrity Details Page
//Get celebrity details
router.get('/celebrities/:theId', (req, res, next) => {
  Celebrity.findById(req.params.theId)
    .then(celebrityFromDB => {
      // console.log('celebritiesFromDB: ', celebrityFromDB);
      res.render('celebrities/celebrity-details', {
        celebrity: celebrityFromDB,
      });
    })
    .catch(err => next(err));
});

module.exports = router;

const express = require('express');
const Celebrity = require('../models/Celebrity.model');

const router = express.Router();

router.get('/celebrities', (req, res, next) => {
    Celebrity.find().then((celebrityFromDB) => {
        console.log(celebrityFromDB)
        res.render('celebrities/index', { celebrities: celebrityFromDB })
    })
        .catch(error => `Error while creating a new celebrity: ${error}`);
});


router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new');

});

router.post('/celebrities', (req, res, next) => {
    console.log(req.body);
    const { name, occupation, catchPhrase } = req.body;

    Celebrity.create({ name, occupation, catchPhrase })
        .then(() => res.redirect('celebrities'))
    //   .catch(error => `Error while creating a new celebrity: ${error}`, res.redirect('/celebrities/new'));
});

router.get('/celebrities/:id', (req, res, next) => {

    const { id } = req.params;

    Celebrity.findById(id)
        .then(celebrityToEdit => {
            // console.log(droneToEdit);
            res.render('celebrities/show', celebrityToEdit);
        })
        .catch(error => console.log(`Error while getting a single celebrity for edit: ${error}`));
});


router.post('/celebrities/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Celebrity.findByIdAndRemove(id)
    .then(() => res.redirect('/celebrities'))
    .catch(error => console.log(`Error while deleting a celebrity: ${error}`));
});

//Edititng

// router.get('/drones/:id/edit', (req, res, next) => {
//   // Iteration #4: Update the drone
//   const { id } = req.params;

//   Drone.findById(id)
//     .then(droneToEdit => {
//       // console.log(droneToEdit);
//       res.render('drones/update-form', droneToEdit);
//     })
//     .catch(error => console.log(`Error while getting a single drone for edit: ${error}`));
// });

// router.post('/drones/:id/edit', (req, res, next) => {
//   // Iteration #4: Update the drone
//   const { id } = req.params;
//   const { name, propellers, maxSpeed } = req.body;

//   Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
//     .then(() => {
//       res.redirect('/drones')
//     })

//     .catch(error => console.log(`Error while updating a single drone: ${error}`));
// });



module.exports = router;

const express = require('express');
const celebRouter = express.Router();

// require model(s):
const Celebrity = require('../models/celebrity');

// display all the movies 
celebRouter.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then( responseFromDB => {
    
        res.render('celebrities/celeb-list', { celeb: responseFromDB });
    })
    .catch( err => console.log('Error while getting the celeb from DB: ', err));
});




celebRouter.get('/celebrities/create', (req, res, next) => {
    res.render('celebrities/new-celeb')
})


celebRouter.post('/celebrities/addCeleb', (req, res, next) => {

    const newCeleb = {
    
        name: req.body.newName,
        occupation: req.body.newOccupation,
        catchPhrase: req.body.newCatchPhrase
    }

    Celebrity.create(newCeleb)
    .then(() => {
      
        res.redirect('/celebrities')
    })
    .catch( err => console.log('Error while saving the new celeb: ', err));
})

// edit the movie - get route to display the form:
celebRouter.get('/celebrities/edit/:celebId', (req, res, next) => {
    const id = req.params.celebId;
    // console.log('id is: ', id);
    Celebrity.findById(id)
    .then(oneCeleb => {
       
        res.render('celebrities/edit-celeb', { celeb: oneCeleb } )
    })
    .catch( err => console.log('Error while updating celebs: ', err));
})

// post route to pick up the changes and send it to DB
celebRouter.post('/celebrities/edit/:id', (req, res, next) => {
    const celebId = req.params.id;
    const editedCeleb = {
        name: req.body.editedName,
        occupation: req.body.editedOccupation,
        catchPhrase: req.body.editedCatchPhrase
    }
   
    Celebrity.findByIdAndUpdate(celebId,editedCeleb)
    .then( () => {
        res.redirect(`/celebrities/${celebId}`);
    } )
    .catch(  error => console.log('Error while saving the changes after editing: ', error));
} )


// delete
celebRouter.post('/celebrities/:celebId/delete', (req, res, next) => {
    const id = req.params.celebId;
    Celebrity.findByIdAndRemove(id)
    .then( () => {
        res.redirect('/celebrities');
    } )
    .catch( err => console.log('Error while deleting celeb: ', err));
})







celebRouter.get('/celebrities/:theId', (req, res, next) => {
    const celebId = req.params.theId;
    console.log('id: ', celebId);
    Celebrity.findById(celebId)
    .then( oneCelebFromDB => {
     
        res.render('celebrities/celeb-details', { celeb: oneCelebFromDB })
    } )
    .catch( error => {
        // { } => ES6: this is optional if we have only one operation and everything fits in one line
        console.log('Error while getting single celeb from DB: ', error)
    });
})







module.exports = celebRouter;
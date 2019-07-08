const express = require('express');
const CelebrityModel = require('../models/celebrity');

const celebRouter = express.Router();

// displaying all celebrities
celebRouter.get('/celebrities', (req, res, next) => {
  CelebrityModel.find()
    .then((celebObj) => {
      // console.log(celebObj);
      res.render('./celebrities/index', { celebObj });
    })
    .catch(err => console.log(err));
});

// displaying celebrity info
celebRouter.get('/celebrities/:id', (req, res, next) => {
  const celebID = req.params.id;
  CelebrityModel.findById(celebID)
    .then((personID) => {
      // console.log(personID);
      res.render('./celebrities/show', personID);
    })
    .catch(err => console.log(err));
});

// adding a new celebrity
celebRouter.get('/add-celeb', (req, res) => {
  res.render('./celebrities/add-celeb');
});

celebRouter.post('/celebrities', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new CelebrityModel({ name, occupation, catchPhrase });

  newCelebrity.save()
    .then((newCeleb) => {
      console.log(newCeleb);
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log(err);
      res.render('./celebrities/add-celeb');
    });
});

// editing a celebrity
celebRouter.get('/celebrities/:id/edit-celeb', (req, res, next) => {
  console.log('I RAN HELLO');
  const celebID = req.params.id;
  CelebrityModel.findById(celebID)
    .then((celebObj) => {
      res.render('./celebrities/edit-celeb', { celebObj });
    })
    .catch(err => console.log(err));
});

celebRouter.post('/celebrities/:celebID', (req, res, next) => {
  console.log('this is the celeb id: ', req.params.celebID); // you can get the id from the url using the same name
  const { name, occupation, catchPhrase } = req.body;

  CelebrityModel.update({ _id: req.params.celebID }, { $set: { name, occupation, catchPhrase } })
    .then((editedCeleb) => {
      console.log('This celebrity has been edited successfully');
      res.redirect('/celebrities');
    })
    .catch((err) => {
      console.log(err);
      res.render('./celebrities/edit-celeb');
    });
});


// deleting a celebrity
celebRouter.post('/celebrities/:id/delete', (req, res, next) => {
  const celebID = req.params.id;
  CelebrityModel.findByIdAndRemove(celebID)
    .then((deletedCeleb) => {
      console.log(`${deletedCeleb.name} has been removed successfully.`);
      res.redirect('/celebrities');
    })
    .catch(err => console.log(err));
});

module.exports = celebRouter;

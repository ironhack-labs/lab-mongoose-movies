const express = require('express');
const router  = express.Router();

const DbzModel = require('../models/dbz_characters.js');

/* GET home page. */
router.get('/characters', (req, res, next) => {
  DbzModel.find((err,allCharacters)=>{
    if(err){
      // skip to the error handler middleware
      next(err);

      // return to avoid showing the view
      return;
    }
    res.locals.listOfCharacters = allCharacters;
    res.locals.title = "Fav Characters | ";
    res.render('characters.ejs');
  });
});

router.get('/character-details/:charId', (req, res, next) => {

  DbzModel.findById(
    req.params.charId,
    (err, characterFromDb)=>{
      // skip straight to the error middleware if there's a DB error
      if(err){
      next(err);
      return;
      }
    res.locals.characterInfo = characterFromDb;
    res.render('character-details.ejs');
    }
  );
});
router.get('/characters/new',(req, res, next) => {
  res.render('character-form.ejs');
});

router.post('/characters',(req, res, next)=>{
  // get the submitted info form the form
  // create a new proudct object
  // save that character to the database
  const theCharacter = new DbzModel({
    name: req.body.name,
    species: req.body.species,
    imgUrl: req.body.imgUrl,
    powerLevel: req.body.powerLevel,
    catchPhrase: req.body.catchPhrase
  })
    // from SCHEMA              from INPUT NAMES
  theCharacter.save((err)=>{
  // if error.... shit
      if (err){
        // skip to the error handler middleware
        next(err);

        // return to avoid showing the view
        return;
      }
  });
  // if success ... yay! but also
  // STEP #3 redirect
  // ALWAYS redirect after a successful to POST to avoid resubmitting
  res.redirect('/characters');
    // You can only redirect to a URL
});

router.post('/characters/:charId/delete',(req, res, next)=>{
  DbzModel.findByIdAndRemove(
    req.params.charId,
    (err, characterInfo)=>{
      if(err){
        next(err);
        return;
      }
      res.redirect('/characters');
    });
});

router.get('/characters/:charId/edit',(req,res,next)=>{
  DbzModel.findById(
    req.params.charId,
    (err, characterFromDb)=>{
      if(err){
        next(err);
        return;
      }
      res.locals.characterInfo = characterFromDb;
      res.render('character-edit.ejs');
    }
  );
});

router.post('/characters/:charId/',(req,res,next)=>{
  DbzModel.findById(
    req.params.charId,
    (err, characterFromDb)=>{
      if(err){
        next(err);
        return;
      }
      characterFromDb.name        = req.body.name;
      characterFromDb.species     = req.body.species;
      characterFromDb.imgUrl      = req.body.imgUrl;
      characterFromDb.powerLevel  = req.body.powerLevel;
      characterFromDb.catchPhrase = req.body.catchPhrase;

      characterFromDb.save((err)=>{
        if(err){
          next(err);
          return;
        }
        res.redirect('/characters');
      });
    }
  );
});

module.exports = router;

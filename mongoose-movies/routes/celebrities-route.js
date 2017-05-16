const express        = require('express');
const Celebrity      = require('../models/celebrity-model.js');
const router         = express.Router();

///celebrities get
router.get('/celebrities',(req, res, next)=>{
  Celebrity.find((err, celebrityList)=>{
      if(err){
        next(err);
        return;
        }
    res.render('celebrities/celebrities-list-view.ejs',{
      celebrities: celebrityList
      });
    });
  });

//celebrity/new get
router.get('/celebrities/new', (req, res, next) => {
    res.render('celebrities/new-celebrities-view.ejs');
  });
//celebrity/new post
router.post('/celebrities/new', (req, res, next)=>{
    const theCelebrity= new Celebrity({
      name: req.body.celebrityName,
      occupation: req.body.celebrityOccupation,
      catchPhrase: req.body.celebrityCatchPhrase
    });
    theCelebrity.save((err)=>{
      if(err){
        res.render('celebrities/new-celebrities-view.ejs', {
          validationErrors: theCelebrity.errors
        });
        return;
      }
      res.redirect('/celebrities');
    });
  });

///celebrities/:id
router.get('/celebrities/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, theCelebrity) => {
      if (err) {
      next(err);
      return;
        }
      if (!theCelebrity) {
        next();
        return;
        }
    res.render('celebrities/celebrities-details-view.ejs', {
      celebrities: theCelebrity
      });
    });
  });

// celebrities/edit get
router.get('/celebrities/:id/edit', (req, res, next) => {
        const celebritiesId = req.params.id;
        Celebrity.findById(celebritiesId, (err, theCelebrity) => {
            if (err) {
            next(err);
            return;
              }
        res.render('celebrities/edit-celebrities-view.ejs', {
          celebrities: theCelebrity
          });
        });
      });

// celebrity/edit post
router.post('/celebrities/:id', (req, res, next) => {
    const celebrityId = req.params.id;
    const celebrityChanges = {
      name: req.body.celebrityName,
      occupation: req.body.celebrityOccupation,
      catchPhrase: req.body.celebrityCatchPhrase
        };
  Celebrity.findByIdAndUpdate(
      celebrityId,
      celebrityChanges,
      (err, theCelebrity) => {
        if (err) {
          res.render('celebrities/edit-celebrities-view.ejs', {
            celebrities: theCelebrity,
            validationErrors: theCelebrity.errors
          });
        return;
          }
      res.redirect('/celebrities');
      }
    );
  });

// celebrity/delete post
router.post('/celebrities/:id/delete', (req, res, next)=>{
    const celebrityId = req.params.id;
    Celebrity.findByIdAndRemove(celebrityId, (err, theCelebrity) =>{
      if (err){
        next(err);
        return;
        }
      res.redirect('/celebrities');
    });
  });

///search
router.get('/search', (req, res, next)=> {
    const searchTerm = req.query.celebritySearchTerm;
    if (!searchTerm){
        res.render('celebrities/search-view.ejs');
        return;
        }
    const searchRegex = new RegExp(searchTerm);
    Celebrity.find(
      {name: searchRegex},
      (err, searchResults) => {
        if(err) {
          next(err);
          return;
          }
      res.render('celebrities/search-view.ejs', {
        celebrities: searchResults
        });
      }
    );
  });


module.exports = router;

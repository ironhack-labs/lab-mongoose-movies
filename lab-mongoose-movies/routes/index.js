const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('celebrities');
  Celebrity.find()
  .then((celebritiesFromDb) => {
   res.locals.celebrityList = celebritiesFromDb;
    res.render ('celebrities');
  })
  .catch ((err) => {
    next(err);
    res.render ('error');
  });
});

router.get ('/about', (res,req, next) => {
  res.render ('about-page');
});

router.get('/celebrities/index', (req, res, next) => {
  res.render('index');
});

// step #1 of create form (show the form)

router.get ('/celebrities/new', (req, res, next) => {
  res.render ('new-celebrity');
});

// step #5 of create form (server process)
router.post ('/new-celebrity', (req, res, nest) => {
  const {name, catchPhrase, occupation} = req.body;
  Celebrity.create ({name, catchPhrase, occupation})
    .then (() =>{
      res.redirect('/celebrities');
    })
    .catch ((err) => {
      next(err);
      res.render ('error');
    });
});


router.get('/celebrities/:Id/edit', (res,req, next)=>{
  Book.findById(req.params.bookId)
  .then ((bookDetails) => {
    res.locals.bookId = req.params.bookId;
    res.locals.book = bookDetails; 
    res.render ('book-edit');
  })
  .catch((err)=>{
    next(err);
  });
});


router.post('/process-edit/:Id', (req, res, next) => {
  res.send (res.body);
}); 

router.get('/celebrities/:Id', (res,req, next)=>{
  CelebritY.findById (req.params.Id)
    .then((celebrityDetails)=>{
      res.locals.celebrity = celebrityDetails;
      res.render ('show');
    })
    .catch((err)=>{
    next(err);
    res.render ('error');
    });
});

module.exports = router;

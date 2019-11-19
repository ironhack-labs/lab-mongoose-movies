var express = require('express');
var router = express.Router();
const Celebrity = require('./../models/Celebrity')


router.get('/', function(req, res, next) {
    Celebrity.find()
    .then( (allCelebsFromDB) => {
        
        res.render('celebrities', { allCelebsFromDB });
    })
    .catch( (err) => console.log(err));
    
});


router.get('/new', (req, res, next) => {
    
      res.render('celebrities/new'), {
        title: "Build Celebrity's Page"
      };
      });

      router.post('/', function(req, res, next) {
        const theCeleb = new Celebrity ({
          name: req.body.name,
          occupation: req.body.occupation,
          catchPhrase: req.body.catchPhrase,
        });
      
        theCeleb.save ((err) => {
          if (err) {
            res.render('celebrities/new', {
              title: "Build Celebrity's Page"
            });
          }
          else {
            res.redirect('/celebrities');
          }
        })
      });

router.get('/:_id', (req, res, next) => {
    const id = req.params;
 
    Celebrity.findById(id)
    .then( (oneCeleb) => {
        console.log(oneCeleb)
      res.render('celebrities/show', {oneCeleb})
      })
    .catch( (err) => console.log(err));
  });
  
  
router.post('/:_id/delete', function(req, res, next) {
  Celebrity.findOne({ _id: req.params.id }, (err, Celeb) => {
    if (err) { return next(err); }

    Celeb.remove((err) => {
      if (err) { return next(err); }

      res.redirect('/celebrities');
    });
  });
});



module.exports = router;
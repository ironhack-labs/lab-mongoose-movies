const express = require('express');
const router  = express.Router();

// neccessary connection to database-model
const Celebrity = require('../models/celebrity')

// GET /celebrities --> List of
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then((celebrities) => {
        //console.log('all our celebrities: ' + celebrities)
        res.render('celebrities/index', { allCelebrities: celebrities });
    })
    .catch((error) => {
        console.log(error);
      })
});

// GET /celebrities/new  --> shows form to users
router.get('/new', (req, res, next) => {
    //res.send('anything')
    res.render('celebrities/new');
});

// POST /celebrities/new --> User can add their Celebs
router.post('/new', (req, res, next) => {
    // console.log("req.body", req.body)
    let userCelebrity = new Celebrity ({ name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchphrase })
    userCelebrity.save()
    .then(() => {
        res.redirect('/celebrities')
    });
});

// GET /celebrities/:identifier --> Detail of
router.get('/:identifier', (req, res, next) => {
    Celebrity.findById(req.params.identifier)
    .then((celebrity) => {
        res.render('celebrities/show', { showCelebrity: celebrity})
    })
    .catch((error) => {
        console.log(error);
      })
});





module.exports = router;
var express = require('express');
var router = express.Router();
const Celebrity = require('../models/celebrity');

//metodo get.
//celebs: iteration 2. listing our celebrities.
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then( (allTheCelebritiesFromDB) => {
        console.log('Retrieved celebrities from DB:', allTheCelebritiesFromDB);
        res.render('celebrities/index', { celebrities: allTheCelebritiesFromDB } );
    })
    .catch( error => {
        console.log('Error while getting the celebrities from the DB: ', error);
    })
})

//metodo get.
//celebs: iteration 4. adding new celebrities
router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
})

//metodo post.
//celebs: iteration 4. adding new celebrities
router.post('/new', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase })
    newCelebrity.save()
    .then( (newCeleb) => {
        console.log('The new celebrity is: ', newCeleb);
        res.redirect('/celebrities');
    })
    .catch( (error) => {
        console.log('Error while adding a new celebrity from the DB: ', error);
        res.render('celebrities/new');
    })
  });

//metodo get.
//celebs: iteration 3. celebrities details page. 
router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then( (celebrity) => {
        console.log(celebrity)
        res.render('celebrities/show', { celebrity })
    })
    .catch( (error) => {
        next(error)
    })
});

//metodo post.
//celebs: iteration 5. deleting celebrities.
router.post('/:id/delete', (req, res, next) => {
    Celebrity.findOneAndDelete(req.params.id)
    .then( (deleteCeleb) => {
        res.redirect('celebrities/index', { deleteCeleb });
    })
    .catch( (error) => {
        console.log('Error while deleting the celebrities from the DB: ', error);
    })
  })

//metodo get.
//celebs: iteration 6. editing celebrities.
router.get('/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then( (editCeleb) => {
        console.log(editCeleb)
        res.render('celebrities/edit', { editCeleb });
    })
    .catch( (error) => {
        console.log('Error while editing the celebrity info ', error);
    })
})

//metodo post.
//celebs: iteration 6. editing celebrities.
router.post('/:id/edit', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.update( {_id:req.params.id}, {name, occupation, catchPhrase}, {new: true} )
    .then( (editCelebrity) => {
        console.log(editCelebrity)
        res.redirect('/celebrities');
    })
    .catch( (error) => {
        console.log('Error while editing the celebrity info ', error);
    })
})

module.exports = router;
const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity')


router.get('/', (req, res, next) =>{
    Celebrity.find({}, (err, celebrities) => {
        if (err) {
            next(err);
        } else {
            console.log(celebrities);
            res.render('celebrities/index', { celebrities })
        }
    })
});

router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

router.get('/:id', (req, res, next) => {
    const celebrityID = req.params.id;
    Celebrity.findById(celebrityID, (err, celebDetail) => {
        if (err) {
            next(err)
        } else  {
            res.render('celebrities/show', { celebDetail });
        }
    })
});

router.get('/:id/edit', (req, res, next) => {
    const celebrityID = req.params.id;
    Celebrity.findById(celebrityID, (err, editCeleb) => {
        if (err) {
            next(err)
        } else  {
            res.render('celebrities/edit', {editCeleb});
        }
    })
})

router.post('/', (req, res, next) => {
    const celebInfo = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
    }

    const newCeleb = new Celebrity(celebInfo);
    newCeleb.save((err) => {
        if (err) {
            return next(err) 
        } else {
            res.redirect('/celebrities/new');
        }
    });
});

router.post('/:id', (req, res, next) => {
    const celebrityID = req.params.id;
    const updates = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase,
  };
    Celebrity.update({ _id: celebrityID}, updates, (err) => {
        if (err) {
            next(err)
        } else {
            res.redirect('/celebrities');
        }
    })
});


router.post('/:id/delete', (req, res, next) => {
    const celebrityID = req.params.id;
    Celebrity.findByIdAndRemove(celebrityID, (err, deleteCeleb) => {
        if (err) {
            return next(err); 
        } else {
            res.redirect('/celebrities');
        }
  });
})

module.exports = router;
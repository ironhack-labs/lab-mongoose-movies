const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

/*GET celebrities page*/
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
        .then(celebrities => {
            res.render('celebrities', { celebrities });
        }).catch(e => {
            console.log(e);
        })
})

/*GET celebrity-detail page*/
router.get('/celebrities/:id', (req, res, next) => {
    //keep the req.params.id in a variable to make it clearer
    let _id = req.params.id;
    Celebrity.findById(_id)
        .then(celebrities => {
            //just 1 celebrity, no need to use an object
            res.render('celebrity-detail', celebrities);
        }).catch(e => {
            console.log(e);
        })
})

/*GET the form page to add a celebrity*/
router.get('/newCelebrity', (req, res, next) => {
    res.render('celebrity-form');
});

/*POST the data of new celebrity on the db and redirect to the list*/
router.post("/newCelebrity", (req, res) => {
    Celebrity.create(req.body, (err, r) => {
        if (err) res.send(err);
        res.redirect("/celebrities");
    })
})

/*POST to delete this element from the db*/
router.post('/:id/delete', (req, res, next) => {
    let _id = req.params.id;
    Celebrity.findByIdAndRemove(_id, (err, docs) => {
        if (err) {
            next();
            return;
        } else {
            res.redirect("/celebrities")
        }
    });
});

/*GET to take me to the form where I can input the new data*/
router.get('/:id/editCeleb', (req, res, next) => {
    let _id = req.params.id;
    Celebrity.findById(_id, (err, docs) => {
        if (err) {
            next();
            return;
        } else {
            res.render("editCeleb", { _id });
        }
    });
});

/*POST to make the changes on the database*/
router.post('/:id/editCeleb', (req, res, next) => {
    let _id = req.body.id;
    let _name = req.body.name;
    let _occupation = req.body.occupation;
    let _catchPhrase = req.body.catchPhrase;
    Celebrity.findByIdAndUpdate(req.params.id, {
        name: _name,
        occupation: _occupation,
        catchPhrase: _catchPhrase
    }, (err) => {
        if (err) {
            console.log(err);
            next();
            return;
        } else {
            res.redirect('/celebrities')
        }
    });
});


module.exports = router;
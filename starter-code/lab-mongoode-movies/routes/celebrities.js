const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', async function (req, res, next) {
   try {
        let celebrities = await Celebrity.find();
        res.status(200)
            .render("celebrities/index", {
                celebrities
            });

    } catch(err) {

       next(err);
   }

});

router.post('/', async function (req, res, next) {
    try {
       const {name, occupation, catchPhrase } = req.body;

        let celebrity =  new Celebrity({ name, occupation, catchPhrase }).save();

        let celebrities = await Celebrity.find();

        res.status(201)
            .render("celebrities/index", {
                celebrities
            });

    } catch(err) {

        res.status(404)
            .render("celebrities/new");
    }

});

router.get('/new', function (req, res, next) {
        res.status(200)
            .render("celebrities/new");
});

router.get('/:id/delete', async function (req, res, next) {
    try {

        await Celebrity.findByIdAndDelete(req.params.id);
        let celebrities = await Celebrity.find();

        res.status(200)
            .render("celebrities/index", {
                celebrities
            });

    } catch(err) {
        next(err);
    }

});

router.get('/:id/edit', async function (req, res, next) {
    try {

       let celebrity = await Celebrity.findById(req.params.id);

       res.status(200)
           .render("celebrities/edit", {
               celebrity
           });

    } catch(err) {
        next(err);
    }

});

router.post('/:id/edit', async function (req, res, next) {
    try {

       let { name, occupation, catchPhrase } = req.body;
       let celebrity = await Celebrity.update({ _id: req.params.id }, {
          $set: {
              name,
              occupation,
              catchPhrase
          }
       });

        let celebrities = await Celebrity.find();
        res.status(200)
            .render("celebrities/index", {
                celebrities
            });

    } catch(err) {
        next(err);
    }

});

router.get('/:id', async function (req, res, next) {
    try {
        let celebrity = await Celebrity.findById(req.params.id);

        res.status(200)
            .render("celebrities/show", {
                celebrity
            });

    } catch(err) {

        next(err);
    }

});



module.exports = router;
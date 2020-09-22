const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");

/* GET home page */
router.get('/', async(req, res, next) => {
    try {
        const celebList = await Celebrity.find();
        console.log(celebList, "celeblist");
        res.render('celebrities/index', {celebrity : celebList});
    }
    catch (error) {
        next(error);
    }
});

router.get('/new', async(req, res, next) => {
    try {
        //res.render("celebrities/new");
        res.render("celebrities/new");
    }
    catch (error) {
        next(error);
    }
});

router.post('/addNew', async(req, res, next) => {
    try {
     const newCeleb = await Celebrity.create(req.body);
     console.log(newCeleb);
     res.redirect("/celebrities");
    }
    catch (error) {
        res.redirect("/celebrities/new");
        next(error);
    }
 })

router.get('/:id', async(req, res, next) => {
    try {
        const chosenCeleb = await Celebrity.findById(req.params.id);
        console.log(chosenCeleb);
        res.render("celebrities/show", {celebrity: chosenCeleb}); 
    }
    catch(error) {
        next(error);
    }
});

router.post('/:id/delete', async(req, res, next) => {
    try {
        const deletedCeleb = await Celebrity.findByIdAndRemove(req.params.id);
        console.log(deletedCeleb);
        res.redirect("/celebrities");
    }
    catch(error) {
        next(error);
    }
})





module.exports = router;
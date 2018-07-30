const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');
const {celebrities: {index, edit, add, show} } = require('../pages');
const Auth = require('../middlewares/auth');

//shows all celebrities
router.get('/', (req, res, next) => {
    Celebrity.find({})
    .then(celebrities => {
        req.session.currentPage = index;
        res.render('celebrities/index', {celebrities});
    })
    .catch(error => {
        next(error);
    })
});
//shows form to add new celebrity
router.get('/new', Auth.ensureLogin, (req, res, next) => {
    req.session.currentPage = add;
    res.render('celebrities/new');
});

//process of adding a new celebrity. Then shows all celebrities
router.post('/', (req, res, next)=> {
    const {name, occupation, catchPhrase} = req.body;
    celebrity = new Celebrity({ name, occupation, catchPhrase });
    celebrity.save()
    .then(()=>{
        res.redirect('/celebrities');
    })
    .catch(error => {
        next(error);
    })
});

//shows celebrity details by id
router.get('/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then(celebrity => {
        if(show.origin === '/celebrities')
        {
            show.origin = show.origin + '/' + celebrity.id;
            show.alternative = show.origin;
        }
        req.session.currentPage = show;
        res.render('celebrities/show', celebrity);
    })
    .catch(error => {
        next(error);
    })
});

//deletes a concrete celebrity
router.post('/:id/delete', Auth.ensureLogin, (req,res,next) => {
    Celebrity.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect('/celebrities');
    })
    .catch(error=>{
        next(error);
    })
});

//shows the form to edit a concrete celebrity
router.get('/:id/edit', Auth.ensureLogin, (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then(((celebrity)=>{
        req.session.currentPage = edit;
        res.render('celebrities/edit', celebrity);
    }))
    .catch(error=>{
        next(error);
    })
});

//process of editing a celebrity. It shows the list of celebrities
router.post('/:id', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase})
    .then(() => {
        res.redirect('/celebrities');
    })
    .catch(error => {
        next(error);
    })
});

module.exports = router;
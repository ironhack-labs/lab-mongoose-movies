const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.model');

//Lista de celebrities
router.get('/index', (req, res, next) => {
	Celebrity.find()
		.then((allCelebs) => res.render('celebrities/index', { allCelebs }))
		.catch((error) => console.log('Error while getting the books from the DB: ', error));
});

//description by id
router.get('/show/:id', (req, res, next) => {
	Celebrity.findById(req.params.id)
		.then((celebId) => res.render('celebrities/show', { celebId }))
		.catch((error) => console.log('Error while getting the books from the DB: ', error));
});

//get the form
router.get('/new', (req, res, next) => res.render('celebrities/new'));

//post new celebrity
router.post('/new', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;
	Celebrity.create({ name, occupation, catchPhrase })
		.then(() => res.redirect('/celebrities/index'))
		.catch((err) => console.log(err));
});
//delete celebrity
router.post('/:id/delete', (req, res, next) => {
	Celebrity.findByIdAndDelete(req.params.id)
		.then(res.redirect('/celebrities/index'))
		.catch((err) => console.log(err));
});

//edit celebrity
router.get('/:id/edit', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then((editCeleb) => res.render('celebrities/edit', { editCeleb }))
        .catch(err => console.log("Hubo un error", err))
})
router.post('/:id/edit', (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity.findByIdAndUpdate(req.params.id, { name, occupation, catchPhrase }, { new: true })
        .then(res.redirect("/celebrities/index"))
        .catch(err => console.log("Hubo un error", err))
})


module.exports = router;

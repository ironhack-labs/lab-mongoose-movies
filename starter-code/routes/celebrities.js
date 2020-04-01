const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity')

// GET index
router.get('/', async (req, res, next) => {
  try {
    const data = await Celebrity.find();
    res.render('celebrities/index', { data });
  } catch (error) {
    console.log(error);
    next();
  }
});

// GET new
router.get('/new', async (req, res, next) => {
  res.render('celebrities/new');
});

// //POST new
router.post('/new', async (req, res, next) => {
  try {
    const data = await Celebrity.create(req.body);
    console.log(`New celebrity added: ${data}`);
    res.redirect('/celebrities');
  } catch (error) {
    console.log(error);
    next();
  }
});

  //GET show
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Celebrity.findById(id);
    res.render('celebrities/show', { data });
  } catch (error) {
    console.log(error);
    next();
  }
});

//GET delete
router.get('/delete/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Celebrity.findByIdAndRemove(req.params.id)
    console.log(`${data.name} deleted`);
    res.redirect('/celebrities');
  } catch (error) {
    console.log(error);
  }  
});

//GET edit 
router.get('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Celebrity.findById(id);
    res.render('celebrities/edit', { data });
  } catch (error) {
    console.log(error);
    next();
  }
});

//POST edit
router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await Celebrity.findByIdAndUpdate(id, req.body);
    console.log(`Celebrity edited: ${data}`);
    res.redirect('/celebrities')
  } catch (error) {
    console.log(error);
    next();
  }
});

module.exports = router;

const express = require('express');
const celebrities = express.Router();
const Celebrity = require('../models/celebrity.js');

celebrities.get('/', async (req, res, next) => {
  try {
    const celebritiesArr = await Celebrity.find();
    res.render('../views/celebrities/index.hbs', {celebritiesArr});
  } catch (err) {
    next(err);
  }
});

celebrities.get('/new', (req, res, next) => {
  res.render('../views/celebrities/new.hbs');
});

celebrities.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const foundObjFromId = await Celebrity.findById(id);
    res.render('../views/celebrities/show.hbs', foundObjFromId);
  } catch (err) {
    next(err);
  }
});

celebrities.get('/:id/edit', async (req, res, next) => {
  try {
    const {id} = req.params;
    const foundObjFromId = await Celebrity.findById(id);
    res.render('../views/celebrities/edit.hbs', foundObjFromId);
    console.log(foundObjFromId);
  } catch (error) {
    
  }
})

celebrities.post('/', async (req, res, next) => {
  const bodyObj = {...req.body};
  const newCelebrityDocument = new Celebrity(bodyObj);
  try {
    await newCelebrityDocument.save();
    // TODO: pergunta: O code academy sugere que é importante colocar os status de sucesso e etc... tem alguma outra coisa que está cuidando disso?
    res.status(201).redirect('/');
  } catch (error) {
    console.log(error);
    next(error);
  }
});


celebrities.post('/:id/delete', async (req, res, next) => {
  const {id} = req.params;
  try {
    await Celebrity.findByIdAndRemove(id);
    res.redirect('/celebrities');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

celebrities.post('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const bodyObj = {...req.body};
    await Celebrity.findByIdAndUpdate(id, {$set: bodyObj});
    res.redirect(`/celebrities/${id}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
})


module.exports = celebrities;

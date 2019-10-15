const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity')

const CelebrityControl = require('../controllers/celebrity-control')
const celebrityControl = new CelebrityControl();

/* GET home page */
router.get('/celebrities', celebrityControl.findCeleb());

//roda para mostrar detalhes da celebridade
router.get('/celebrities/:id', (req, res, next) => {
  const thisId = req.params.id;
  // console.log('>>>>>>>>>>>>>>',thisId)
  Celebrity.findById(thisId)
    .then(celebrityDbTwo => {
      console.log('the celebrities =>>>', celebrityDbTwo)
      res.render('celebrities-id', {
        celebrityDbTwo
      });
    })
    .catch(error => {
      console.log('Error while getting the celebrity from the DB: ', error);
      next();
    })
});

//rota que renderiza após adicionar
router.get('/celebrities-new', (req, res) => {
  res.render('celebrities-new')
})
//rota com método para criar
router.post('/celebrities', (req, res) => {
  console.log(req.body)
  Celebrity.create(req.body)
  .then(() => res.redirect('/'))
  .catch(error => {throw new Error(error)})
})

//rota com método para deletar
router.post('/celebrities/:id/delete', (req, res) => {
  const thisId = req.params.id;
  console.log("PARAMS >>>>>",thisId)
  Celebrity.findByIdAndRemove(thisId)
    .then(() => res.redirect('/celebrities'))
    .catch(error => {
      console.log('Error while getting the celebrity from the DB: ', error);
    })
});

//rota que renderiza após adicionar
router.get('/celebrities/:id/edit', (req, res) => {
  const thisId = req.params.id;
  // console.log('>>>>>>>>>>>>>>',thisId)
  Celebrity.findById(thisId)
    .then(celebrityDbTwo => {
      console.log('the celebrities =>>>', celebrityDbTwo)
      res.render('celebrities-edit', {
        celebrityDbTwo
      });
    })
    .catch(error => {
      console.log('Error while getting the celebrity from the DB: ', error);
      next();
    })
});
//rota com método para criar
router.post('/celebrities/:id/edit', (req, res) => {
  const thisId = req.params.id;
  console.log(req.params.id)
  Celebrity.findByIdAndUpdate(thisId, req.body)
  .then(() => res.redirect('/celebrities'))
  .catch(error => {throw new Error(error)})
})


module.exports = router;
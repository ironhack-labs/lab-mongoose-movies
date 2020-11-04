const express = require('express');
const celebs = require('../models/celebrity');
const router  = express.Router();


/* GET home page */
router.get('/', async (req, res, next) => {
    try{
      let respuesta = await celebs.find()
        res.render('celebrities/index', {respuesta});
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });

  router.get('/new', (req, res, next) => {
    res.render("celebrities/new");
  });

  router.post('/new', (req, res, next) => {
    const { name, occupation, catchPhrase} = req.body;
    let newceleb = new celebs({name, occupation, catchPhrase})
    console.log('CELEBS VATRIABLE, VALOR:', newceleb)
    newceleb.save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log('EL ERROR ES:', error);
      res.redirect('/celebrities/new');
    })
  });

  router.post('/:id/delete', async (req, res, next) =>{
    try{
      let celebrityId = await celebs.findByIdAndRemove({_id: req.params.id})
      console.log('CONSOLE LOG DE ELIMINAAAAAAA' ,{celebrityId} )
      res.redirect('celebrities/index');
    }catch(err){
        console.log('Error removing celebrities from the DB: ', err);
    }
  })

  router.get('/:Id', async (req, res, next) => {
    try{
      let respuesta2 = await celebs.findById(req.params.Id)
      console.log('el findy by id lo detectaaaa' ,{respuesta2} )
        res.render('celebrities/show', {respuesta2 });
    }catch(err){
        console.log('Error while getting the celebrities from the DB: ', err);
    }
  });


module.exports = router;


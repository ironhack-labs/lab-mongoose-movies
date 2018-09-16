const router = require('./index');
const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');


router.get('/celebrities', (req, res, next) => { //READ LIST
  Celebrity.find({})
    .then(celebrities => {
      res.render('celebrities/index', { celebrities })
    })
    .catch(e => console.log(e))
})

router.get('/celebrities/new', (req, res, next) => { //CREATE menu
  res.render('celebrities/new')
})


router.get('/celebrities/:id', (req, res, next) => {  //READ DETAIL menu
  Celebrity.findById({ _id: req.params.id })
    .then(celebrity => res.render('celebrities/show', { celebrity }))
    .catch(e => console.log(e))
})

router.post('/celebrities', (req, res, next) => {  //CREATE exe
  let data = req.body;
  let celebrity = new Celebrity({ name: data.name, occupation: data.occupation, catchPhrase: data.catchPhrase });
  celebrity.save()
    .then((celebrity) => res.redirect('/celebrities'))

    .catch(() => res.render('/celebrities/new'))
})

router.post('/celebrities/:id/delete', (req, res, next) => { //DELETE exe
  let id = req.params.id;
  Celebrity.findByIdAndDelete({ _id: id })
    .then(res.redirect('/celebrities'))
    .catch(e => console.log(e))
})

router.get('/celebrities/:id/edit', (req, res, next) => {  //UPDATE menu
  let id = req.params.id;
  Celebrity.findById({_id: id})
    .then(celebrity => res.render('./celebrities/edit', {celebrity}))
    .catch(e => console.log(e))
})

router.post('/celebrities/:id', (req, res, next) => {  //UPDATE exe
  let data = req.body;
  let celebrity = { name: data.name, occupation: data.occupation, catchPhrase: data.catchPhrase };
  console.log (celebrity)
  Celebrity.findByIdAndUpdate({_id: req.params.id}, celebrity)
    .then((data) => {
      res.redirect('/celebrities')
      //console.log(data);
    })
    .catch(e => console.log(e))
}) 


module.exports = router;

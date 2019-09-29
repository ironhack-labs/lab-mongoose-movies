const rout = require('express').Router();
const celebrityModel = require('../models/celebrity')

rout.get('/index', (req, res, next) => {
  celebrityModel.find()
    .then((data) => {
      // res.send(data)
      res.render('celebrities/index', {
        data
      })
    })
    .catch((error) => {
      next();
      console.log(error);
    })
});

rout.get('/:id', (req, res, next) => {
  const {id} = req.params;
  console.log(id);
  celebrityModel.findById(id)
    .then((data) => {
  // console.log(data);
  // res.send({data);
      res.render('celebrities/show', data)
    })
    .catch((error) => {
      next();
      console.log(error);
    })
});

rout.get('/new', (req, res, next) => {
      res.render('celebrities/new');
});

rout.post('/', (req, res, next) => {
  const {name,occupation,catchPhrase} = req.body;
  celebrityModel.create({name,occupation,catchPhrase})
  .then(() => res.redirect('celebrities/index'))
  .catch(err => console.log(err));
});

rout.post('/:id/delete', (req, res, next) => {
  const {id} = req.params;
  celebrityModel.findByIdAndDelete(id)
  .then((data) => {
    res.redirect('/');
  })  
  .catch((err) => console.log(err))
});

rout.get('/:id/edit', (req, res, next) => {
  const {id} = req.params;
  celebrityModel.findById(id)
  .then(data => {
    // res.send(data);
    res.render('celebrities/edit', data);
  })  
  .catch((err) => console.log(err))
});

rout.post('/:id', (req,res,next) => {
  const {id} = req.params;
  // const {name, occupation,catchPhrase} = req.body;
  celebrityModel.findByIdAndUpdate(id, req.body)
  .then(data => {
    res.redirect('/');
  })
  .catch(err => console.log(err));
});

module.exports = rout;
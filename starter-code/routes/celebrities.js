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
  console.log(data);
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

module.exports = rout;
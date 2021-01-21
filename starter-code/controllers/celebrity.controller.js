const Celebrity = require('../models/celebrity.model')

module.exports.register = (req,res,next) => {
  res.render('celebrities/new-celebrity')
}

module.exports.list = (req, res, next) => {
  const celebrityList = []
  Celebrity.find()
    .then(celebrities => {
      for(let celebrity of celebrities){
        celebrityList.push(celebrity)
      }
      res.render('celebrities/list', {celebrityList})
    })
    .catch(next);
}

module.exports.doRegister = (req, res, next) => {
  Celebrity.create(req.body)
    .then(celebrity => {
      res.redirect('celebrities');
    })
    .catch(err => console.error(err))
}

module.exports.detail = (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then(celebrity => res.render('celebrities/details', { celebrity }))
    .catch(err => {
      console.error(err);
      next()
    })
}

module.exports.delete = (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndRemove(id)
    .then(res.redirect('celebrities'))
    .catch(err => console.error(err), next)

  res.redirect('/celebrities')
}

module.exports.edit = (req, res, next) => {

  //res.render('celebrities/edit')
  
  const { id } = req.params;
  Celebrity.findById(id)
    //.then(celebrity => console.log(celebrity.id))
    .then(celebrity => {
      if (celebrity){
        res.render('celebrities/edit', { celebrity })
      } else {
        next(createError(404, 'Celebrity does not exists'))
      }
    })

    .catch(err => {
      console.error(err);
      res.redirect('celebrities')
    })
}

module.exports.doEdit = (req, res, next) => {

  const {id} = req.params


  Celebrity.findByIdAndUpdate(id,{$set: req.body})
    .then(celebrity => res.redirect(`celebrities`), {celebrity})
    .catch(err => console.error(err), next)
}

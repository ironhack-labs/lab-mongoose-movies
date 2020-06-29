const express = require('express')
const router = express.Router()

const Celebrity = require('./../model/Celebrity')

router.get('/', (req, res)=> {
  Celebrity
      .find()
      .then(allCelebrities => res.render('celebrities.views/index', {allCelebrities}))
      .catch(error => console.log('el error es: ', error))
  }  
)

router.get('/:celebrityID', (req, res)=>{

  Celebrity
      .findById(req.params.celebrityID)
      .then(celebrity => res.render('celebrities.views/show', celebrity))
      .catch(error => console.log('el error es: ', error))
  }
)

router.get('/new', (req, res)=> res.render('celebrities.views/new'))

router.post('/new', (req, res) => {

    const {name, occupation, catchPhrase} = req.body
    console.log('los req.body son: ',req.body)

    Celebrity
        .create({name, occupation, catchPhrase})
        .then(() => res.redirect('/celebrities'))
        .catch(error => console.log('el error es: ', error))

})

router.post('/:id/delete', (req,res) =>{

  Celebrity
      .findByIdAndRemove(req.params.id)
      .then(() => res.redirect('/celebrities'))
      .catch(error => console.log('el error es: ', error))

})




module.exports = router
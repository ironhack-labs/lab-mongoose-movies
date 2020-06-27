const express = require('express')
const router = express.Router()

const Celebrity = require('./../models/celebrity-model')



//Iteracion 2 - renderizado vista de celebrities

router.get('/', (req, res)=> {
    Celebrity
        .find()
        .then(celebritiesArr => res.render('celebrities.views/index', {celebritiesArr}))
        .catch(error => console.log('el error es: ', error))
    }  
)


// iteración 4 - add a new celebrity


router.get('/new', (req, res)=> res.render('celebrities.views/new'))

router.post('/new', (req, res) => {

    const {name, occupation, catchPhrase} = req.body
    console.log('los req.body son: ',req.body)

    Celebrity
        .create({name, occupation, catchPhrase})
        .then(()=> res.redirect('/celebrities'))
        .catch(error => console.log('el error es: ', error))

})



// iteración 3 - renderizado detalles celebrity
router.get('/:celebrityID', (req, res)=>{

    Celebrity
        .findById(req.params.celebrityID)
        .then(celebrity => res.render('celebrities.views/show', celebrity))
        .catch(error => console.log('el error es: ', error))
    }
)


//iteración 5 - delete celebrity

router.post('/:id/delete', (req,res) =>{

    Celebrity
        .findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/celebrities'))
        .catch(error => console.log('el error es: ', error))

})

//BONUS iteración 6 - edit celebrity

router.get('/:id/edit', (req, res) =>{

    Celebrity
        .findById(req.params.id)
        .then(celebrity => res.render('celebrities.views/edit', celebrity))
        .catch(error => console.log('el error es: ', error))
})


router.post('/:id', (req, res)=>{

    const {name, occupation, catchPhrase} = req.body

    Celebrity
        .findByIdAndUpdate(req.params.id, {name, occupation, catchPhrase})
        .then(()=> res.redirect(`/celebrities/${req.params.id}`))
        .catch(error => console.log('el error es: ', error))
})





module.exports = router


const express = require('express')
const router = express.Router()

const Celebrity = require('../models/celebrity')

// Endpoints
router.get('/', (req, res) => {
    
    Celebrity.find()
        .then(celebritiesList => res.render('celebrities/index', {celebritiesList}))
     //       
        .catch(error => console.log("parece que ha habido un error", error))
    
})

router.get('/detalles/:celebrity_id', (req, res) => {

    const id = req.params.celebrity_id
    // console.log( "el id de la celebrity es", id)

    Celebrity.findById(id)

        .then(celebrityDetails => res.render('celebrities/show', celebrityDetails))
            
        .catch(err => console.log("ERRORR", err))


})

router.get('/new', (req, res) => res.render('celebrities/new'))

router.post('/new', (req,res)=> {

    const {name, occupation, catchPhrase} = req.body

    Celebrity.create({name, occupation, catchPhrase})
        .then(() => res.redirect('/celebrities'))
        .catch(error => console.log("parece que ha habido un error", error))

})

router.post("/delete/:_id", (req, res) =>{
    const id = req.params._id
        Celebrity.findByIdAndRemove(id)
        .then(()=> res.redirect("/celebrities"))
        .catch(error => console.log("parece que ha habido un error", error))
})

router.get("/edit/:_id", (req, res)=> {

    const id = req.params._id

    Celebrity.findById(id)
        .then(celebrityDetails => res.render('celebrities/edit', celebrityDetails))
        .catch(error => console.log("parece que ha habido un error", error))
})

router.post("/edit/:_id", (req,res)=>{

    const id = req.params._id
    const {name, occupation, catchPhrase} = req.body

    Celebrity.findByIdAndUpdate(id, {name, occupation, catchPhrase})
        .then(()=> res.redirect("/celebrities"))
        .catch(error => console.log("parece que ha habido un error", error))

})






module.exports = router
const express = require('express')
const router = express.Router()
const Celebrity = require('../models/celebrity')
// Endpoints

router.get('/', (req, res) => {

    Celebrity.find()
    .then(celeb => res.render('celebrities/index', {celeb}))
    .catch(err => console.log('ERROR:', err))

})
router.get('/celeb-details/:celebrity_id',(req,res) => {

    const id = req.params.celebrity_id
    //console.log(id)
    Celebrity.findById(id)
    .then(celebDetails => res.render('celebrities/celeb-details' , celebDetails))
    .catch(err => console.log("ERRORR", err))

})
//create
router.get('/new',(req,res)=> res.render('celebrities/new'))

router.post('/new',(req,res)=>{

    const {name,occupation,catchPhrase} = req.body
    
    Celebrity.create({name,occupation,catchPhrase})
    .then(() => res.redirect('/celebrities'))
    .catch(err => console.log("ERRORR", err))
})
//delete
router.post('/celeb-details/:celebrity_id',(req,res)=>{

    const id = req.params.celebrity_id
    Celebrity.findByIdAndDelete(id)
    .then(celeb => res.render('celebrities/delete', {celeb}))
    .catch(err => console.log("ERRORR", err))
})
//updatee
router.get('/update/:celebrity_id', (req, res) => {

    const {name,occupation,catchPhrase} = req.body
    const celeb_id = req.params.celebrity_id

    Celebrity.findById(celeb_id)
        .then(updt => res.render('celebrities/update', updt))
        .catch(err => console.log("ERRORR", err))
})
router.post('/update/:celebrity_id',(req,res)=>{

    const id = req.params.celebrity_id
    const {name,occupation,catchPhrase} = req.body
    Celebrity.findByIdAndUpdate(id,{name,occupation,catchPhrase})
    .then(celeb => res.redirect('/celebrities'))
    .catch(err => console.log("ERRORR", err))
})


module.exports = router
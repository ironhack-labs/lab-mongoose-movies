const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

router.get('/list',(req,res,next)=>{
    Celebrity.find()
        .then(celebrities=>{
            res.render('celebrity/getCelebrity',{celebrities})
        })
        .catch(e=>{
            next(e)
        })
})

router.get('/detailCelebrity/:id',(req,res,next) =>{
    const {id} = req.params
    Celebrity.findById(id)
        .then(celebrity => {
            res.render('celebrity/detailCelebrity',celebrity)
        })
        .catch(e => {
            next(e)
        })
})
router.get('/new',(req,res,next) =>{
    res.render('celebrity/new')
})

router.post('/new',(req, res, next)=>{
    //const {id} = req.params
    //req.body['storeID'] = tiendaId
    Celebrity.create(req.body)
        .then(celebrity=>{
            res.send(`Succes ${celebrity.name} created`)
        }).catch(e=>{
        res.render('celebrity/new',{tiendita:req.body,e})
    })
})

router.get('/delete/:id',(req,res,next) => {
    const {id} = req.params
    Celebrity.findByIdAndRemove(id)
        .then(celebrity => {
            res.send(`Succes ${celebrity.name} deleted`)
        })
        .catch(e => {
            next(e)
        })
})

module.exports = router
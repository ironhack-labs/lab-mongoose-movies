const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

router.get('/',(req,res,next)=>{
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
module.exports = router
const express = require('express')
const { get } = require('mongoose')
const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movies.model')
const router = express.Router()




router.get('/', function(req, res){

    const nombre= req.query.q
   
    Celebrity.find({$or:[{name:{$regex:nombre}},{nameLower:{$regex:nombre}}]})
    .then(names=>res.render("search",{names}))
    .catch(err=>console.log('Error: ', err))
    
});

module.exports = router



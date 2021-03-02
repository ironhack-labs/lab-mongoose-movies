const express = require('express');
const router  = express.Router();
const MovieModel = require('../model/movie-model')
const CelebrityModel = require('../model/celebrity-model')


router.get("/create", (req, res, next)=>{
    CelebrityModel.create
    res.render('new-movie')
})


router.post("/create", (req,res,next)=>{
    const {title, genre, plot}= req.body
    MovieModel
})
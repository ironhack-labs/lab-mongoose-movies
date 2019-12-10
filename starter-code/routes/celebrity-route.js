const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity');
const MMovie   = require('../models/MMovie');


// remember that we put a prefix on this route inside app.js
// so this route is actually '/authors/:id'
router.get('/:id', async (req, res, next)=>{
    try{ 
        let celebrity = await Celebrity.findById(req.params.id)
        
        let mmovies = await MMovie.find({celebrity: req.params.id})

        res.render('celebrities/single-celebrity', {celebrity, mmovies})

    }catch(err){
        next(err);
    }
})



module.exports = router;
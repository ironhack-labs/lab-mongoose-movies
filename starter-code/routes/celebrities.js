const express = require('express')
const router = express.Router()
const celebrity = require('../models/celebrity')

// Locate the /celebrities GET route in routes/celebrities.js.

router.get('/', (req, res, next) => {

    celebrity.find().then(data=>{
        console.log("data ====> ",data)

        res.render('celebrities',{data})

    })
})




// ITERATION 3 HELP

module.exports = router;
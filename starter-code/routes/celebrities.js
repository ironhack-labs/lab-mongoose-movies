const express = require('express')
const router  = express.Router()

const Celebrity = require("../models/celebrity")


/* GET celebrities page */
    router.get('/celebrities', (req, res) => {
        Celebrity.find()
        .then((celebArray) => {
            console.log(celebArray)
            res.render("celebrities/index", { celebrities:celebArray }) 
            
        }).catch((error) => {
            console.log(error)
        });
    })
/* GET to an specific celebrity page */
router.get('/celebrities/:id', (req, res) => {
    Celebrity.findById(req.params.id)
    .then((result) => {
        console.log(result)
        res.render("celebrities/show", {celebrities:result})
    })
    .catch((error) => {
        console.log(error)
    });
})
    

module.exports = router
const express = require('express');
const router = express.Router();


router.get('/pokemon', (req, res, next)=>{

    res.render('pokemon');
})



module.exports = router;
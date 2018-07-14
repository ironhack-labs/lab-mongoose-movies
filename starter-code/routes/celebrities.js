const express = require('express');
const router = express.Router();
const celebritiesController = require('../controllers/celebrities.controller')

router.get('/celebrities', ()=>{
    console.log('in');
});

module.exports = router;
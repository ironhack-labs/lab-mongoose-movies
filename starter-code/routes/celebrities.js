const express = require("express")
const router = express.Router()
const Celebrity = require('../models/celebrity')

// router.get('/celebrities', async (req, res, next) => {
//     const celebrities = await Celebrity.find()
//     res.render('/celebrities/index', {celebrities});
// });

  
module.exports = router
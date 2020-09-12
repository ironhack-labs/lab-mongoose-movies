console.log('9. En base.routes.js')

const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => {

    console.log('Dentro del endpoint \'/\'')

    res.render('index')
})


module.exports = router

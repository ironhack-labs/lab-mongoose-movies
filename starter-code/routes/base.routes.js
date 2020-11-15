const express = require('express')
const router = express.Router()

// Endpoints
//router.use((req, res, next) => res.locals.isAuthenticated = req.isAuthenticated())  ---> Intento fallido de crear un login/signin - logout dinámicos
router.get('/', (req, res) => res.render('index'))


module.exports = router

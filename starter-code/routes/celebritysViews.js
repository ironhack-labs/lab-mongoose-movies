const router = require('express').Router()
const {celebrtysController,celebritysDetails} = require('../controllers/celebritysControllers')

router.get('/', celebrtysController)
router.get('/:celebrityid',celebritysDetails )


module.exports = router
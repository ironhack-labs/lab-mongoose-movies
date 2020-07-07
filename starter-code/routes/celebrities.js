const express = require('express');
const router = express.Router();
const celebrityModel = require('./../models/Celebrity')

router.get('/', (req, res, next) => {
    celebrityModel.find()
        .then((celebrities) => res.render('celebrities/index', { celebrities }))
        .catch(next)
});



module.exports = router;
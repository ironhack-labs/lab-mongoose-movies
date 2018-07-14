const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');

module.exports.list = (req, res, next) => {
    console.log('in');
    Celebrity.find()
        .then( celebrities => {
            console.log(req.body);
            res.render('celebrities', {celebrities});
        }
        )
        .catch(error => {
            console.error(error);
        })
}
const Celebrity = require('../models/celebrity.model');

module.exports.index = (req, res, next) => {
    Celebrity.find({}).then( (celebrities) => {
        res.render('index');
    });
};

module.exports.indexCelebrities = (req, res, next) => {
    Celebrity.find({}).then( (celebrities) => {
        res.render('celebrities/index', {
            celebrities: celebrities
        }).catch( (error) => {
            next.send(error);
        });
    });
};
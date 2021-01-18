const Celebrity = require('../models/celebrity');

module.exports.list = (req, res, next) => {
    Celebrity.find()
        .then(celebrity => {
            res.render('celebrities/index', {
                celebrities: celebrity
            })
        })
        .catch(next);
}
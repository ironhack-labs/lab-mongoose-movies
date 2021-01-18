const Celebrity = require('../models/celebrity');

module.exports.list = (req, res, next) => {
    Celebrity.find()
        .then(celebrity => {
            res.render('celebrities/index', {
                celebrities: celebrity
            })
        })
        .catch(next);
};

module.exports.details = (req, res, next) => {
    const { id } = req.params;
    Celebrity.findOne({_id: id})
        .then(celebrity => {
            res.render('celebrities/show', { celebrity });
        })
        .catch(error => console.log(error))
};
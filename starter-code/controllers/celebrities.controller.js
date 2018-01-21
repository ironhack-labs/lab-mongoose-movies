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

module.exports.celebrityDetails = (req, res, next) => {
    console.log(req.params.id);
    Celebrity.findOne({_id: req.params.id})
        .then((celebrity) => {
            res.render('celebrities/show', {
                celebrity: celebrity
            });
        })
        .catch((error) => {
            next(error);
        })
}

module.exports.new = (req, res, next) => {
    res.render('celebrities/new');
};

module.exports.doNew = (req, res, next) => {
    const newCelebrity = new Celebrity(req.body);
    newCelebrity.save()
        .then(res.redirect('/celebrities'))
        .catch((error) => next(error))
};

module.exports.delete = (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(res.redirect('/celebrities'))
        .catch((error) => next(error));
};
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
    res.render('celebrities/form', {
        celebrity: new Celebrity()
    });
};

module.exports.doNew = (req, res, next) => {
    const newCelebrity = new Celebrity({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    });
    newCelebrity.save()
        .then(res.redirect('/celebrities'))
        .catch((error) => next(error))
};

module.exports.delete = (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
        .then(res.redirect('/celebrities'))
        .catch((error) => next(error));
};

module.exports.edit = (req, res, next) => {
    Celebrity.findById(req.params.id)
        .then((celebrity) => {
            res.render('celebrities/form', {
                celebrity: celebrity
            })
        })
        .catch((error) => next(error));
};

module.exports.doEdit = (req, res, next) => {
    const update = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    };
    Celebrity.findByIdAndUpdate(req.params.id, update)
        .then(res.redirect('/celebrities'))
        .catch((error) => next(error));
};
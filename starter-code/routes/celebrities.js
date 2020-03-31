const Celebrity = require('../models/Celebrity');

module.exports = {

    index: function(req, res) {
        Celebrity.find({})
            .then(celebrities => {
                console.log(celebrities)
                res.render('celebrities/index', { celebrities: celebrities });
            })
            .catch(error => console.log(error))
    },

    celebrityInfo: function(req, res) {
        let { id } = req.params;

        Celebrity.findById(id)
            .then(celebrity => {
                res.render('celebrities/show', {
                    celebrity
                })
            })
            .catch(error => console.log(error))

    },

    addCelebrity: function(req, res, next) {
        return res.render('celebrities/new');
    },

    createCelebrity: function(req, res) {
        let {
            name,
            occupation,
            catchPhrase
        } = req.body;

        Celebrity.create({
            name,
            occupation,
            catchPhrase
        }).then(() => {
            res.redirect('/celebrities');
        })
    },

    deleteCelebrity: function(req, res) {
        let { id } = req.params;

        Celebrity.findByIdAndRemove(id)
            .then(response => {
                console.log(response)
                res.redirect('/celebrities')
            })
            .catch(error => console.log(error))

    }
}
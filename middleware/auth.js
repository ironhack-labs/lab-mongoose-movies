const auth = async(req, res, next) => {
    if (!req.user) {
        req.flash('failure', 'Must be logged in to do that...');
        res.redirect('/')
    }
    next();
}

module.exports = auth;
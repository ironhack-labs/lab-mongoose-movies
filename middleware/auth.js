const userAuth = async(req, res, next) => {
    if (!req.user) {
        req.flash('failure', 'Must be logged in to do that...');
        res.redirect('/')
    }
    next();
}

const adminAuth = (req, res, next) => {
    if (!req.user) {
        req.flash('failure', 'please log in to use this feature')
        res.redirect('/login')
    }
    if (!req.user.isAdmin) {
        req.flash('failure', 'you do not have access to this feature')
        res.redirect('/')
    }
    next()
}

module.exports = {
    userAuth,
    adminAuth
}
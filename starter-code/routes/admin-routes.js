const express = require('express');
const router  = express.Router();

const User    = require('./models/User');

var checkIfAdmin = function(req, res, next){
    if(!req.user){
        req.flash('error', 'please log in to use this feature')
        res.redirect('/login')
    }
    if(!req.user.isAdmin){
        req.flash('error', 'you do not have access to this feature')
        res.redirect('/')
    }
}
next();

router.get('/create-new-account', checkIfAdmin(), (req, res, next)=>{
    res.render('user-views/new-account')
})

router.get('/active-users', checkIfAdmin(), (req, res, next)=>{
    User.find()
    .then((allUsers)=>{
        res.render('user-views/active-users', {users: allUsers})
    })
    .catch((err)=>{
        next(err);
    })
})

router.post('/admin/delete/:idThing', (req, res, next)=>{
    User.findByIdAndRemove(req.params.idThing)
    .then((result)=>{
        req.flash('success', 'account successfully deleted')
        res.redirect('/active-users');
    })
    .catch((err)=>{
        next(err)
    })
})

module.exports = router;
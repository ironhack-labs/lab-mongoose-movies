const User = require("../models/User.model");

// CREATE
// Get Form
module.exports.create = (req, res, next) => res.render('users/userForm')

// Post Form
module.exports.doCreate = (req, res, next) => {
  const newUser = new User(req.body)
  newUser.save()
      .then(user => {
          res.redirect(`/users/${user._id}`)
          console.log(`The user ${user.userName} was added`);
      })
      .catch( err => {
          console.log(`An error occurred while creating the new user: ${err}`)
          res.redirect('users/userForm')
      });
}

// READ
// User list
module.exports.list = (req, res, next) => {
    User.find()
        //.then(usersFound => res.send(usersFound))
        .then(usersFound => res.render('users/index', { users: usersFound }));
}

// User detail
module.exports.profile = (req, res, next) => {
  User.findById(req.params.id)
    .populate({
      path: "celebrities",
      populate: {
        path: "user",
      },
    })
    .populate({
      path: "movies",
      populate: {
        path: "user"
      }
    })
    .then(user => res.render("users/profile", user))
		.catch(error => next(error));
};

// UPDATE
// Get form
module.exports.edit = (req, res, next) => {
  User.findById(req.params.id)
      .populate('user')
      .then(movieToEdit => res.render('users/userForm', movieToEdit))
      .catch(err => next(err));
}

// Post form
module.exports.doEdit = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(user => res.redirect(`/users/${user._id}`))
      .catch(err => next(err));
}


// DELETE
module.exports.delete = (req, res, next) => {
  console.log(req.params.id);
  // User.findByIdAndRemove(req.params.id)
  //     .then(() => res.redirect('/users'))
  //     .catch(err => next(err));
}
const User = require("../models/User.model");

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

// DELETE
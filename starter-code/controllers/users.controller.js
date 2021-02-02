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
    .then(user => res.render("users/user", user))
		.catch(error => next(error));
};


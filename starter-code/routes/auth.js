const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/signup", (request, response, next) => {
  response.render("auth/signup");
});

router.post("/signup", (request, response, next) => {
  const { email, password } = request.body;
  if ((email = "" || password === "")) {
    response.render("auth/signup", {
      errorMessage: "email and password required",
    });
  } else {
    const hashedPassword = bcrypt.hashSync(password, 10);
    User.create({ email, passHash: hashedPassword })
      .then((user) => {
        console.log(user);
        response.render("auth/profile", user);
      })
      .catch((error) => {
        console.log("Error creating user: ", error);
        next(error);
      });
  }
});

module.exports = router;

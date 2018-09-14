
const express    = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home");
});


//--------- protected routes
router.use((req, res, next) => {
  //--- protected routes, Authentication needed!! 
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
});

router.get("/secret", (req, res, next) => {
  res.render("auth/secret");
});

//--------- End protected routes



module.exports = router;

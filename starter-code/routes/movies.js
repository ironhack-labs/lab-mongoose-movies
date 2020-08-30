const express = require("express");
const router = express.Router();
const {
  listAllmovies,
  getNewMovie,
  createNewMovie,
  getEditMovie,
  showMovie,
  editMovie,
  deleteMovie,
} = require("../controllers/movies");

router.get("/", listAllmovies);
router.get("/new", getNewMovie);
router.post("/new", createNewMovie);
router.get("/edit/:id", getEditMovie);
router.get("/show/:id", showMovie);
router.post("/edit/:id", editMovie);
router.post("/delete/:id", deleteMovie);

module.exports = router;

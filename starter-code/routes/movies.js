const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();
const occupations = ["Action", "Adventure", "Comedy", "Fantasy"];

//Rendering the "movies list" view
router.get("/", (req, res, next) => {
	Movie.find({})
		.then((movies) => {
			res.render("movies/index", { movies });
		})
		.catch((err) => {
			next("error"); //Ask about it.
			console.error(err);
		});
});

module.exports = router;
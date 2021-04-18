const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();
const genres = ["Action", "Adventure", "Comedy", "Fantasy"];

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

//Rendering the "new movie" view
router.get("/new", (req, res, next) => {
	res.render("movies/new", { genres });
});

//Getting the "new movie" values
router.post("/new", (req, res, next) => {
	const { title, genre, plot } = req.body;
	Movie.create({ title, genre, plot })
		.then(() => {			
			res.redirect("/movies");
		})
		.catch((err) => {
			res.render("movies/new", { err, genres });
			console.error(err);
		});
});

//Rendering the "Movie" view
router.get("/:id", (req, res, next) => {
	Movie.findById(req.params.id)
		.then((movie) => {
			res.render("movies/show", movie);
		})
		.catch((err) => {
			next("error"); //Ask about it.
			console.error(err);
		});
});

module.exports = router;
const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
	Movie.find()
		.then(movies => {
			console.log(movies);
			res.render("movies/index", {movies});
		})
		.catch(error => {
			console.error(`Oh no. An error happened, check this out: ${error}`);
			next(error);

		});
});

////////////////////////////////////
// Create a new movie starts //
//////////////////////////////////
router.get("/movies/new", (req, res, next) => {
	res.render("movies/new");
});

router.post("/movies/new", (req, res, next) => {
	Movie.create(req.body)
		.then(newCeleb => {
			console.log(`The new movie is: ${newCeleb}`);
			res.redirect("/movies");
		})
		.catch(error => {
			console.error(`Oh no. An error happened, check this out: ${error}`);
			res.redirect("movies/new");
		});
});
//////////////////////////////////
// Create a new movie ends //
////////////////////////////////

router.get("/movies/:id", (req, res, next) => {
	Movie.findById(req.params.id)
		.then(movie => {
			console.log(movie);
			res.render("movies/show", {movie});
		})
		.catch(error => {
			console.error(`Oh no. An error happened, check this out: ${error}`);
			next(error);
		});
});

router.post("/movies/:id/delete", (req, res, next) => {
	Movie.findByIdAndRemove(req.params.id)
		.then(() => {
			console.log("Movie is deleted");
			res.redirect("/movies");
		})
		.catch(error => {
			console.error(`Oh no. An error happened, check this out: ${error}`);
			next(error);
		});
});

router.get("/movies/:id/edit", (req, res, next) => {
	Movie.findById(req.params.id)
		.then(movie => {
			console.log(movie);
			res.render("movies/edit", movie);
		})
		.catch(error => {
			console.error(`Oh no. An error happened, check this out: ${error}`);
			next(error);
		});
});

router.post("/movies/:id/edit", (req, res, next) => {
	Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
		.then(movieDetails => {
			console.log(`Updated: ${movieDetails}`);
			res.redirect("/movies");
		})
		.catch(error => {
			console.error(`Oh no. An error happened, check this out: ${error}`);
		});
});

module.exports = router;
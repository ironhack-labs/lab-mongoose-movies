const express = require("express");
const { render } = require("../app");
const Celebrity = require("../models/Celebrity.model");
const router = express.Router();

router.get("/", (req, res, next) => {
	Celebrity.find({})
		.then((celebrities) => {
			res.render("celebrities/index", { celebrities });
		})
		.catch((err) => {
			next("error"); //Ask about it.
			console.error(err);
		});
});

router.get("/new", (req, res, next) => {
	res.render("celebrities/new");
});

router.post("/new", (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;
	Celebrity.create({ name, occupation, catchPhrase })
		.then(() => {
			res.redirect("/celebrities");
		})
		.catch((err) => {
      //todo: fix error show at hbs
			res.render("celebrities/new", { err });
			console.error(err);
		});
});

router.get("/:id", (req, res, next) => {
	Celebrity.findById(req.params.id)
		.then((celebrity) => {
			res.render("celebrities/show", celebrity);
		})
		.catch((err) => {
			next("error"); //Ask about it.
			console.error(err);
		});
});

module.exports = router;

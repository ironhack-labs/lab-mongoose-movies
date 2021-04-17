const express = require("express");
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

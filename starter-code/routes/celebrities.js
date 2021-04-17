const express = require("express");
const Celebrity = require("../models/Celebrity.model");
const router = express.Router();

//Rendering the "celebrities list" view
router.get("/", (req, res, next) => {
	Celebrity.find({})
		.then((celebrities) => {
			res.render("celebrities/inde", { celebrities });
		})
		.catch((err) => {
			next("error"); //Ask about it.
			console.error(err);
		});
});

//Rendering the "new celebrity" view
router.get("/new", (req, res, next) => {
	const occupation = ["Actor", "Singer", "Comedian", "Unknown"];
	res.render("celebrities/new", { occupation });
});

//Getting the "new celebrity" values
router.post("/new", (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body;
	Celebrity.create({ name, occupation, catchPhrase })
		.then(() => {
			res.redirect("/celebrities");
		})
		.catch((err) => {
			res.render("celebrities/new", { err });
			console.error(err);
		});
});

//Deleting the "selected celebrity"
router.post("/:id/delete", (req, res, next) => {
	Celebrity.findByIdAndRemove(req.params.id)
		.then(() => {
			res.redirect("/celebrities");
		})
		.catch((err) => {
			next("error"); //Ask about it.
			console.error(err);
		});
});

//Rendering the "Celebrity" view
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

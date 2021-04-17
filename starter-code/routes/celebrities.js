const express = require("express");
const Celebrity = require("../models/Celebrity.model");
const router = express.Router();

router.get("/", (req, res) => {
	Celebrity.find({})
		.then((celebrities) => {
			res.render("celebrities/index", { celebrities });
		})
		.catch((err) => {
			console.error(err);
		});
});

module.exports = router;

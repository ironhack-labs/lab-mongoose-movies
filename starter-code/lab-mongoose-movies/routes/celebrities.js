const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/celebrity-model")

//////////////////////////////////////////
// MY CODE STARTS HERE
//////////////////////////////////////////

// SHOW CELEBRITIES
router.get("/celebrities", (req, res, next) => {
	Celebrity.find()
	.then(results => {
		res.locals.celebrities = results
		res.render("celebrities/index")
	})
	.catch(err => next(err))
})

// SHOW CELEB DETAILS
router.get("/celebrities/:celebId", (req, res, next) => {
	const {celebId} = req.params;
	Celebrity.findById(celebId)
	.then(foundDoc => {
		res.locals.foundDoc = foundDoc
		res.render("celebrities/show")
	})
	.catch(err => next(err))
})

//////////////////////////////////////////
// MY CODE /
//////////////////////////////////////////

module.exports = router;
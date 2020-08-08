const express = require("express");
const router = express.Router();
const Celebrity = require("../models/celebrity");

router.get("/", (req,res,next)=>{
	Celebrity.find()
	.then(celebritiesFromDB => {
		console.log(`List of celebrities: ${celebritiesFromDB}`)
		res.render("celebrities/index", {celebrities: celebritiesFromDB})
	})
	.catch(err => console.log(`Error retrieving celebrities: ${err}`))
})

router.get("/new", (req, res, next) => {
	res.render("celebrities/new");
});

router.post("/new", (req, res, next) => {
	// console.log({ body: req.body });
	Celebrity.create(req.body)
		.then((createdCelebrity) => {
			res.render("celebrities/show", { celebrity: createdCelebrity });
		})
		.catch((err) => console.log(`Error creating celebrity: ${err}`));
});

router.get("/update/:id", (req, res, next) => {
		const { id } = req.params;
		Celebrity.findById(id)
		  .then(celebrityToEdit => {
			res.render("celebrities/editCelebrity", celebrityToEdit);
		  })
		  .catch(error => console.log(`Error while getting a single celebrity for edit: ${error}`));
	  });

router.post("/update/:id", (req, res, next) => {
    Celebrity.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedCelebrity) => {
			console.log({ updatedCelebrity });
			res.redirect(`/celebrities/${req.params.id}`)
        })
        .catch((err) => console.log(`Error updating celebrity: ${err}`));
});

router.post("/:id/delete", (req, res, next) => {
    Celebrity.findByIdAndDelete(req.params.id)
	.then(() => res.redirect('/celebrities'))
    .catch(error => console.log(`Error while deleting a celebrity: ${error}`));
});

router.get('/:id', (req, res, next)=>{
	Celebrity.findById(req.params.id)
	.then(celebrityFromDB => {
		res.render("celebrities/show", {celebrity : celebrityFromDB})
	})
	.catch(err => console.log(`Error retrieving celebrity details: ${err}`))
	
})

module.exports = router;
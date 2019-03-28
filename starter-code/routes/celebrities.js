const express = require("express")
const router = express.Router();
const Celebrity = require("../models/Celebrity")

router.get("/celebrities" ,(request, response) => {
    Celebrity.find()
	.then(celebrities => {
	    response.render("celebrities/index" , {celebrities})
	})
	.catch(error => {
	    console.log(error);
	})
});


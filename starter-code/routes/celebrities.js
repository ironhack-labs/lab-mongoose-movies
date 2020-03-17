const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');

  
  

router.get('/', (req, res, next) => {
	Celebrity.find()
		.then((allTheCelebritiesFromDB) => {
			//console.log('Retrieved celebrities from DB:', allTheCelebritiesFromDB);
			res.render('celebrities/index', { celebrities: allTheCelebritiesFromDB });
		})
		.catch((error) => {
            next(error);
		})
});

router.get('/:id', (req, res, next) => {
	Celebrity.findById(req.params.id)
		.then((theCelebrity) => {
			console.log('The celebrity I want to see is:', theCelebrity.name);
			res.render('celebrities/show', { celebrity: theCelebrity });
		})
		.catch((error) => {
			next(error);
		})
});






module.exports = router;
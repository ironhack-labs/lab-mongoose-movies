const express = require('express');
const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/', (req,res,next) => {
	Celebrity.find({}, (err, celebrities) => {
    if (err) { return next(err) }
    
    res.render('celebrities/index', {
      celebrities: celebrities
    });
  });
});

router.get('/new', (req,res,next) => {
    res.render('celebrities/new');
  });

router.post('/', (req,res,next) => {
	const celebrity = new Celebrity({
		name : req.body.name,
  		occupation : req.body.occupation,
  		catchPhrase: req.body.catchPhrase,
	});
	celebrity.save((err, celebrity) => {
		if (err) { res.render('celebrities/new'); }
		//Iteration #4: ////there is a bug because of the ID key
		//If there is no error, redirect to the page with the list of celebrities
    	res.redirect('celebrities/index');
	});
	
  });

router.get('/:id', (req,res,next) => {
	const id = req.params.id;
	//console.log(id);

	Celebrity.findById(id, (err, celebrity) => {
    if (err) { return next(err); }

    //console.log(celebrity);
    res.render('celebrities/show', {
      celebrity: celebrity
    });
  });
});

router.get('/:id/edit', (req,res,next) => {
	const id = req.params.id;
	//console.log(id);

	Celebrity.findById(id, (err, celebrity) => {
    if (err) { return next(err); }
    //console.log(celebrity);
    res.render('celebrities/edit', {
      celebrity: celebrity
    });
  });
});

router.post('/:id', (req,res,next) => {
	const id = req.params.id;
	//console.log(id);
	const celebrity = new Celebrity({
		name : req.body.name,
  		occupation : req.body.occupation,
  		catchPhrase: req.body.catchPhrase,
	});

	
	Celebrity.findByIdAndUpdate(id, celebrity, (err, celebrity) => {
		if (err) { return next(err); }
		//Iteration #4: ////there is a bug because of the ID key
		//If there is no error, redirect to the page with the list of celebrities
    	return res.redirect('/celebrities/index');
	});
  });


router.post('/:id/delete', (req,res,next) => {
	const id = req.params.id;
	//console.log(id);
	
	Celebrity.findByIdAndRemove(id, (err, celebrity) => {
		if (err) { return next(err); }
		//Iteration #4: ////there is a bug because of the ID key
		//If there is no error, redirect to the page with the list of celebrities
    	return res.redirect('/celebrities/index');
	});
  });



module.exports = router;
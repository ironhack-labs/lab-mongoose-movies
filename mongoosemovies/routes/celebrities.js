const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebs) => {
    if (err) {
			return next(err)
		}
		else {
			res.render('celebrities/index', {
				title: "Celebrities",
				celebs: celebs
			});
		}
  });
});

router.get('/new',(req, res) => {
	res.render('celebrities/new')
})

router.post('/',(req,res,next) => {
	let celeb = {
		name: req.body.name,
		occupation: req.body.occupation,
		catchPhrase: req.body.catchPhrase,
	}
	Celebrity.create(celeb,(err,doc) =>{
		if (err) {
			next(err);
		}	else {
			res.redirect('/celebrities');
		}
	});
})


router.get('/:id', (req, res, next) => {
  let celebId = req.params.id;

  Celebrity.findById(celebId, (err, celeb) => {
    if (err) { return next(err); }
    res.render("celebrities/show",{
			clickedCeleb: celeb
		});
	})
});

router.get('/:id/edit', (req, res, next) => {
  const celebId = req.params.id;

  Celebrity.findById(celebId, (err, celeb) => {
    if (err) { return next(err); }
    res.render('celebrities/edit', { celeb: celeb });
  });
});

router.post('/:id', (req, res, next) => {
  const celebId = req.params.id;

  /*
   * Create a new object with all of the information from the request body.
   * This correlates directly with the schema of Product
   */
  const celebToUpdate = {
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
  };

  Celebrity.findByIdAndUpdate(celebId, celebToUpdate, (err, celeb) => {
    if (err){ return next(err); }
    return res.redirect('/celebrities');
  });
});

router.get('/:id/delete', (req, res, next) => {
  const id = req.params.id;

  Celebrity.findByIdAndRemove(id, (err, celebs) => {
    if (err){ return next(err); }
    return res.redirect('/celebrities');
  });

});



module.exports = router;

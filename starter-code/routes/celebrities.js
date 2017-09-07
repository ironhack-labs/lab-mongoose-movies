const express = require('express');

const router = express.Router();

router.get('/celebrity', (req, res, next) => {
    Celebrity.find({}, (err, celebrities) => {
      if (err) {return next(err); }

      res.render('celebrities/index', {
        title: 'Celebrities',
      });
    });
  });


module.exports = router;

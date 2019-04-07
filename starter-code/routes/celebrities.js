const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/${dbName}`);

 router.get('/celebrities', (req, res, next) => {
  console.log('in celebrities');
  Celebrity.find()
    .then((data) => {
      const celebrities = data;
      res.render('celebrities/index', { celebrities });
    })
    .catch((err) => {
        console.log('an error happened: ', err);
        next();
      });
});
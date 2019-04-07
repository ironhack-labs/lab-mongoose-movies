const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/${dbName}`);
// Call the Celebrity model's find method to retrieve all the celebrities.
 router.get('/celebrities', (req, res, next) => {
  console.log('in celebrities');
  Celebrity.find()
    .then((data) => {
      const celebrities = data;
      res.render('celebrities/index', { celebrities });
    })
    .catch((err) => {
        console.log('an error happened: ', err);
        // If there's an error, call the route's next function and return the error.
        next();
      });
});
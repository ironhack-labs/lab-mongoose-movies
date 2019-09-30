const Celebrity = require('../models/Celebrity')

class CelebrityControl {
  
  findCeleb() {
    return function (req, res) {
      Celebrity.find()
        .then(celebrityDb => {
          console.log('the celebrities =>>>', celebrityDb)
          res.render('celebrities', {
            celebritiesList: celebrityDb
          });
        })
        .catch(error => {
          console.log('Error while getting the celebrity from the DB: ', error);
         
        })
    }

  }
}

module.exports = CelebrityControl;
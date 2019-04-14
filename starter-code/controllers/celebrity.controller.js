const Celebrity = require('../models/Celebrity');

const celebrityController = {
  getCelebrities(){
    return Celebrity.find();
  }
};
module.exports = celebrityController;
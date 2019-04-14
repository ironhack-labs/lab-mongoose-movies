const Celebrity = require('../models/Celebrity');

const celebrityController = {
  getCelebrities(){
    return Celebrity.find();
  },
  getCelebrityById(id){
    return Celebrity.findById(id);
  }
};
module.exports = celebrityController;
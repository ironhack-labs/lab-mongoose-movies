const Celebrity = require('../models/Celebrity');

const celebrityController = {
  getCelebrities(){
    return Celebrity.find();
  },
  getCelebrityById(id){
    return Celebrity.findById(id);
  },
  addCelebrity(name, occupation, catchPhrase){
    return new Celebrity({
      name,
      occupation,
      catchPhrase,
    }).save();
  },
  deleteById(id){
    return Celebrity.findByIdAndRemove(id);
  },
};
module.exports = celebrityController;
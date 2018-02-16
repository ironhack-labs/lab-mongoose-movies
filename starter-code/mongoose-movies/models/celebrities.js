
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const celebritySchema = new Schema({

  //Name of the celebrity
  name: {
    type: String
  },

//ocupation of the celebrity e.g (Singer, actor etc)
  ocupation: {
    type: String
  },


//Celebrity's catchphrase
  catchPhrase: {
    type: String
  }

});

const celebrityModel = mongoose.model("Celebrity", celebritySchema);


module.exports = celebrityModel;

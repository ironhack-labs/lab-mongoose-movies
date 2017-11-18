const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const celebritySchema = new Schema ({
  name:{
    type: String,
    // required: [ true, "Name of the Celebrity required" ]
  },

  occupation: {
    type: String,
    // required: [ true, "What's the occupation of this celebrity?" ]
  },

    catchPhrase: {
      type: String,
      // required: [ true, "Write a phrase for this Celebrity"]
    }

});


const CelebrityModel = mongoose.model("Celebrity", celebritySchema);


module.exports = CelebrityModel;

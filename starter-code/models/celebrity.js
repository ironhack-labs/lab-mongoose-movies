const mongoose = require("mongoose");
/*
function capitalize (val) {
  if (typeof val !== 'string') {
      val = '';
  }
  return val.charAt(0).toUpperCase() + val.substring(1);
}*/

const schema = new mongoose.Schema(
  {
    //name: { type: String, required: true, set: capitalize},
    //occupation: { type: String, default: undefined, set: capitalize},
    name: String,
    occupation: String,
    catchPhrase: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("celebrity", schema);

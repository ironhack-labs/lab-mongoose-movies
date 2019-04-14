const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritySchema = new Schema({
  name: {type:String, unique:true},
  occupation:{ type: [String], default: 'unknown'},
  catchPhrase: {type: String, required: true}
}, {
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
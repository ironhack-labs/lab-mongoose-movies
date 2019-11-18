const {Schema, model} = require('mongoose');

const celebritySchema = new Schema({
  name: {type:String, required:true},
  occupation: {type:String, default:"unknown"},
  catchPhrase:String
})

module.exports = model("Celebrity", celebritySchema);


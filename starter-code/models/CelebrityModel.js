const mongoose = require ("mongoose");

const celebritySchema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
})

const celebrityModel = mongoose.model("Celebrity", celebritySchema)
// "Celebrity" (1st argument of mongoose.model) = name of the collection in mongodb (it will put it in plurial form)


module.exports = celebrityModel;
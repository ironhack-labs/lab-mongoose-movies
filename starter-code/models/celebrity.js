const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaCelebrity = new Schema({
    name :  String,
    occupation: String,
    catchPhrase: String

})

const celebrityModel = mongoose.model("Celebrity", schemaCelebrity);
module.exports = celebrityModel;


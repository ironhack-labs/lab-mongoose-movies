/*Define mongoose and Schema to be able to use them */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*Create Celebrity Schema*/
const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
});

/*Export Celebrity Model*/
module.exports = mongoose.model("Celebrity", celebritySchema);
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// More info here -> http://mongoosejs.com/docs/schematypes.html
const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = {
    Celebrity: Celebrity,

}
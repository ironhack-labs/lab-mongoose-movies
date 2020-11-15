const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
}, {
    timestamp: true
});

const celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = celebrity;
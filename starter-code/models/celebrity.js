const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        default: "unknown",

    },
    catchPhrase: {
        type: String,
        required: true,
        maxlength: 200,
    },
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;
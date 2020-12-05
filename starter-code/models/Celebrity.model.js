const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    occupation: {
        type: String,
        default: "Unknow"
    }, 
    catchPhrase: {
        type: String,
        default: "This celebrity doesn't have any Phrase"
    }
})

module.exports = mongoose.model("Celebrity", celebritySchema);
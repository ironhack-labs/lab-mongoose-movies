const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: { type: String },
    occupation: {
        type: String,
        enum: ["Singer", "Actor/ress", "Musician", "comedian", "Athlete", "Other"]
    },
    catchPhrase: { type: String }
})

const Celebrity = mongoose.model("Celebrity", celebritySchema)

module.exports = Celebrity;
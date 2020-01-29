const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
    {
        name: String,
        occupation: {type: String, default: "unknown"},
        catchPhrase: String
    },
    {
        timestamps: true
    }
);
const Celebrity = mongoose.model("celebrity", schema);
module.exports = Celebrity;
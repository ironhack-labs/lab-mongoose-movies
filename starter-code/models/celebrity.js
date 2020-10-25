const mongoose = require("mongoose");
const schema  = new mongoose.Schema ({
    name: { type: String },
    occupation: { type: String },
    catchPhrase: { type: String, required: true },
});
const Celebrity = mongoose.model("celebrity", schema);
module.exports = Celebrity;
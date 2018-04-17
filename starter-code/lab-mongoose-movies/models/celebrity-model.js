const mongoose     = require('mongoose');

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: { type: String, required: true },
    occupation: { type: String, default: "Unknown" },
    catchPhrase: { type: String, default: "Unknown" }
}, {
    timestamps: true
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;


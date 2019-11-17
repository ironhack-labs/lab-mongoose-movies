const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaCelebritys = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
}, {
    timestamps: true
});

const Model = mongoose.model("Celebritys", schemaCelebritys);
module.exports = Model;
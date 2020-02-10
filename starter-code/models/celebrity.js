const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schemaName = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
    img: String
}, {
    timestamps: true
});

const Model = mongoose.model("Celebrity", schemaName);
module.exports = Model;
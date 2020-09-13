const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
},{
    timestamps: true
})

const Celebritie = mongoose.model("Celebritie", celebSchema)

module.exports = Celebritie
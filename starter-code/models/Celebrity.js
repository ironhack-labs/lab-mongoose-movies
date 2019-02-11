let mongoose = require("mongoose")
let Schema = mongoose.Schema

const celebritySchema = new Schema({
    name: String,
    occupation: String || "unknown",
    catchPhrase: String
})

module.exports = mongoose.model("Celebrity", celebritySchema)
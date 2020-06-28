const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPrase: String,
}, {
    timestamps: true
}

)

const Celebrity = mongoose.model("celebrity", celebritySchema)

module.exports = Celebrity

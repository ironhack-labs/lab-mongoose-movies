const mongoose = require("mongoose")

const celebritySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    ocupation: {
        type: String,
        default: "Unknown"
    },
    catchPhrase: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

const Celebrity = mongoose.model("Celebrity", celebritySchema)

module.exports = Celebrity
const mongoose = require("mongoose")

const celebritySchema = new Schema({
    name: {
        type: String
    },
    occupation: {
        type: String,
    },
    catchPharse: {
        type: String
    }

}, {
    timestamps: true

})

const Celebrity = mongoose.model("Celebrity", celebritySchema)

module.exports = Celebrity
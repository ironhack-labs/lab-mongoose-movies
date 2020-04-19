const mongoose = require("mongoose")
const Schema = mongoose.Schema

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: {
        type: String,
        required: true
    }

})

const Celibrity = mongoose.model("Celebrity",celebritySchema)

module.exports = Celibrity
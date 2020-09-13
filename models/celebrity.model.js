const mongoose = require("mongoose")
const Schema = mongoose.Schema

const celebritySchema = new Schema({
    
    name: {
        type: String
    },
    ocupation: {
        type: String,
        default: "unknown"
    },
    catchPhrase: {
        type: String
    }
},  {
    timestamps: true

})

const Celebrity = mongoose.model("Celebrity", celebritySchema)

module.exports = Celebrity
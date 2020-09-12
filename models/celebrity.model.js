const mongoose = require("mongoose")

const newSchema = {

    name: {

        type: String,
        required: true,
        default: 'Anonymus'
    },
    occupation: String,

    catchPhrase: String

}

const celebritySchema = new mongoose.Schema(newSchema, { timestamps: true })

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity
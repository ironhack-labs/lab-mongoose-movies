const { builtinModules } = require('module')
const mongoose = require('mongoose')

const celebritySchema = new mongoose.Schema({

    name: String,
    ocupation: [String],
    catchPhrase: String

}, {
    timestamps: true
})

const Celebrity = mongoose.model('celebrity', celebritySchema)

module.exports = Celebrity
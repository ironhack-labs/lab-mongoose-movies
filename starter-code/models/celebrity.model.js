const mongoose = require ('mongoose')

const Celebrity = new mongoose.Schema ({
    name : String,
    occupation : String,
    catchPhrase : String
})

const Celebrities = mongoose.model ('Celebrity', Celebrity)

module.exports = Celebrities
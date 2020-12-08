const mongoose = require ("mongoose")

const MovieSchema = new mongoose.Schema({
    title: String,
    genre:String,
    plot : String,

    

})

module.exports = mongoose.model("Movie", MovieSchema)
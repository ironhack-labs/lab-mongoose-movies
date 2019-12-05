const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const celebSchema = new Schema({
    name: {type: String},
    occupation: String,
    catchPhrase: String,
    image: String,
})

const Celeb = mongoose.model("Celeb", celebSchema)

module.exports = Celeb;
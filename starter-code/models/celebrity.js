const mongoose = require('mongoose');
const Schema = mongoose.Schema


const CelebsSchema = new Schema({

    name:String,
    occupation:String,
    catchPhrase:String
})

const celeb=mongoose.model('celeb',CelebsSchema)

module.exports = celeb;


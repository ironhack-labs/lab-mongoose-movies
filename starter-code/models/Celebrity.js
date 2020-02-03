const {model, Schema} = require('mongoose')

const CelebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPrase: String
    },{
        timestamps: true,
        versionKey: false
    })

module.exports = model('Celebrity', CelebritySchema)
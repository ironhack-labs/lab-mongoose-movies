const {model, Schema} = require('mongoose')

const MovieSchema = new Schema({
        title: String,
        genre: String,
        plot: String
    },{
        timestamps: true,
        versionKey: false
    })

module.exports = model('Movie', MovieSchema)
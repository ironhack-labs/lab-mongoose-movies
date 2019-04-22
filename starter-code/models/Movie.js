const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema(
    {
        title: {
            type: String,
            require: true, 
        },
        genre: String,
        plot, String
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = mongoose.model('Movie', movieSchema)
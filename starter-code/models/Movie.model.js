const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(
    {
        title: String,
        cast: { type: Schema.Types.ObjectId, ref: 'Author' },
        rating: Number,
        catchPhrase: String
    }
)

module.exports = mongoose.model('Movie', movieSchema);
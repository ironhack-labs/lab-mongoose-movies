const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {type:String},
    genre: {type:String},
    plot: {type:String}
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
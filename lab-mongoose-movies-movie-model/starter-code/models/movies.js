const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
});

const Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;
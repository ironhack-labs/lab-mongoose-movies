const mongoose = require('mongoose');
const {
  Schema,
  model
} = mongoose;

const movieSchema = new Schema({
  // unless you are defining more than the "type" property, you don't have to use {} (see below)
  // firstName: {type: String, require: true}
  title: String,
  genre: String,
  plot: String,
  cast: [{
    type: Schema.Types.ObjectId,
    ref: 'Celebrity'
  }]
}, {
  // keeps record when is created and updated
  timestamps: true
});

// const Movie = model('Movie', movieSchema);
// module.exports = Movie;

module.exports = model('Movie', movieSchema);
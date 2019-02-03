const mongoose = require('mongoose');

// we use Schema to set our own blueprint for each instance in this collection
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
  // unless you have more than 1 property defined, you need to use: {type: String}
  // firstName: { type: String },
  title: String,
  genre: String,
  plot: String,
  cast: [{type: Schema.Types.ObjectId, ref: "Celebrity"}]
}, {
  // keep record on when created and updated
  timestamps: true
})

// we create Movie class based on these previously defined rules
const Movie = mongoose.model("Movie", movieSchema);


// export Movie class to make it available in other files
module.exports = Movie;
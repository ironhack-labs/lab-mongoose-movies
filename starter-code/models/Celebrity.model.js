const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const celebritySchema = new Schema ({
    name: { type: String, required: true },
    lastName: [String],
    ocupation: { type: [String], required: true },
    catchPhrase: { type: String, required: true },
    user: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true }
},
{
  toJSON: { virtuals: true },
}
);

// celebritySchema.virtual("movies", {
//     ref: "Movie",
//     foreignField: "celebrity",
//     localField: "_id",
//   });

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity;

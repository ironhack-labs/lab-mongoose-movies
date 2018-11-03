const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  // // The reference to the Publisher model
  // _publisher: { type: Schema.Types.ObjectId, ref: 'Publisher' }
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
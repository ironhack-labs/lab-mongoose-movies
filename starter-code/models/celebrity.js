const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritSchema = new Schema({
    name: { type: String },
    occupation: {
      type: String,
      enum: ["actor", "singer", "comedian", "unknown"],
    },
    catchPhrase: { type: String }
  },
  { timestamps: true }
);


const Celebrity = mongoose.model("Celebrity", celebritSchema)

module.exports = Celebrity
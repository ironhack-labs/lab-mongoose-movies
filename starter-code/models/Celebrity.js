const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: {
    type: String,
    enum: ["Actor", "Singer", "Comedian"]
  },
  catchPhrase: String
}, {collection: "celebrities"})

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;







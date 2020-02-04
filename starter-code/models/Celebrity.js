const mongoose = require("mongoose");
const celebritySchema = new mongoose.Schema({
  name: String,
  occupation: {
    type: String,
    enum: ["actor", "singer", "comedian", "unknown"]
  },
  catchPhrase: {
    required: true,
    type: String
  }
});

const Celebrity = mongoose.model("celeberity", celebritySchema);

module.exports = Celebrity;

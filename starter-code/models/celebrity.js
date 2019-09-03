const mongoose = require("mongoose");
const starSchema = new mongoose.Schema(

  {
    name: String,
    occupation: String,
    catchPhrase: String
  }

)

const Celebrity = mongoose.model("star", starSchema)
module.exports = Celebrity;
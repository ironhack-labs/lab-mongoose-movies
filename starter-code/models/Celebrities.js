const {model, Schema} = require("mongoose")

const celebrityModel = new Schema(
  {
    name: String, 
    occupation: {
      type: String, 
      enum: ["actor", "singer", "comedian", "unknown"]
    },
    catchphrase: {
      type: String,
      required: true
    }
  }
)
module.exports = model( "Celebrities",celebrityModel)
const {
  Schema,
  model
} = require("mongoose")
// const mongoose = require("mongoose")
// const Schema = mongoose.Schema


const CelebritySchema = new Schema(
  {
    name: {
      type: String,
      // required: true
    },
    ocupation: {
      type: String,
      default:"unknown"
      // required: true
    },
    catchPhrase: {
      type: String,
      required: true
    }
  },{
    timestamps: true
  }
)

module.exports = model("Celebrity", CelebritySchema)

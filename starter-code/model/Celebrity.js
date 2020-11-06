const { Schema, model } = require("mongoose")

const Celebrity = new Schema(
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
    },
  {
    timestamps: true
  }
)

module.exports = model("User", userSchema)

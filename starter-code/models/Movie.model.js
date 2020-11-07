const { Schema, model, Model } = require("mongoose")

const movieSchema = new Schema (
    {
      title:{
          type: String,
      },
      genre:{
          type: String
      },
      plot:{
          type: String
      }
    }

)

module.exports = model("Movie", movieSchema)
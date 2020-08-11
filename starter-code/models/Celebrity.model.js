const mongoose = require("mongoose")
const {Schema, model} = mongoose;

const celebritySchema = new Schema(
    {
         name: {type: String},
         occupation: {type: String},
         catchPhrase: {type: String},
     },
     {
         timestamps: true
     }
 )

 const Celebrity = model("Celebrity", celebritySchema)
 module.exports = Celebrity; 
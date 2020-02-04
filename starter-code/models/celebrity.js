const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const celebritySchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String
  }
//  Not sure if what's listed below is needed
//   {
//     // keeps record when is created and updated
//     timestamps: true
//   }
);



module.exports = model('Celebrity', celebritySchema);
const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true
      },
      occupation:{
        type: String,
        required: true
      },
      catchPhrase:{
        type: String,
        required: true
      },
      image: {
        type: String,
        required: false,
        default: 'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon-715x715.png'
      }
   
})

const Celebrity = mongoose.model("Celebrity",celebritySchema);

module.exports = Celebrity;
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


//Create model's schema using the MOngoose "Schema" class
const celebritySchema = new Schema({
  //document structure & rules defined here
name:{type:String,required:true},
occupation:{type:String},
catchPhrase:{type:String},


   
});


//"Celebrity" model->"celebreties" collection
const Celebrity = mongoose.model("Celebrity", celebritySchema);

//Make the Book model harable to other files in the app
module.exports =Celebrity;
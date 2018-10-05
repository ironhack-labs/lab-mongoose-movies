//model = no s
//route = s !! :)


const mongoose = require("mongoose"); //always start with these two lines
const Schema   = mongoose.Schema;


//celebritySchema is the rule and put it as the second argument 
//when creating the model


const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});


//whatever is inside "" will be the name of the collection
const Celebrity = mongoose.model("Celebritie", celebritySchema);


//leting the oder files see this. when using require the others files 
//will look at whaterver is equal to module.exports
module.exports = Celebrity; //end with this line

//first require mongoose within the model folder
const mongoose = require('mongoose');
//then assign the schema object as a mongoose schema.
const Schema = mongoose.Schema;

//now create a new schema object 
const CelebritySchema = new Schema({
    name : String,
    occupation: String,
    catchPhrase: String
});

//now create a new mongoose! model and pass the assigned name and relevant schema you have just defined
const Celebrity = mongoose.model("Celebrity", CelebritySchema);

//finally, export the model module
module.exports = Celebrity;

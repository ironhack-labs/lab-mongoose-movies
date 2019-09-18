const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const celeb = new Schema({

  name: String,
  occupation: String,
  catchPhrase: String
})

const celebrityModel = mongoose.model('Celebrity', celeb);



//first name in mongoose model is the collection name

// celeb is referring to the schema you created



module.exports = celebrityModel;

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

celebritySchema =  new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
},{
  timestamps :{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  versionkey: false
})

module.exports = mongoose.model('Celebrity', celebritySchema)
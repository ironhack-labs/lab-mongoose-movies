const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebritySchema = new Schema ({
  name: String,
  occupation:String,
  catchPhrase: String,
  
},{timestamps:{
  updatedAt:'updated_at',
  createdAt:'created_at'
}
})
module.exports= mongoose.model('Celebrity',celebritySchema)

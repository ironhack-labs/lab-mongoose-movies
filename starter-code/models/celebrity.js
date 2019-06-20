const mongoose=require('mongoose');
const Schema = mongoose.Schema;


const CelebritySchema = new Schema(
    {
        name: {type: String},
        occupation : {type: String},
        cacthPhrase: {type : String},
    }
)

const CelebrityModel= mongoose.model("Celebrity", CelebritySchema)
module.exports = CelebrityModel;
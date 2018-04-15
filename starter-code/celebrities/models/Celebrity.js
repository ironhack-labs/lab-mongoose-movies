const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema ({
name: {type: String}, 
occupation: {type: String}, 
catchPhrase: {type: String}, 
movie: {type: Schema.Types.ObjectId, ref:"Movie"}
})

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;
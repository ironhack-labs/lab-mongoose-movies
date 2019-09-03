const mongoose = require("mongoose");
const schema = mongoose.Schema;
const celebritySchema = new schema ({
    name:String,
    occupation: String,
    catchPhrase: String,
});
const celebrityModel = mongoose.model("Celebrity", celebritySchema);

module.exports=celebrityModel;

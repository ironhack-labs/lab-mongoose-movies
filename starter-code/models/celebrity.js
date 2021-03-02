const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const celebritySchema = new Schema({
    "name": String,
    "occupation":String,
    "catchPrase": [String]

});
const celebrityModel = mongoose.model("celebrity", celebritySchema);

module.exports = celebrityModel;
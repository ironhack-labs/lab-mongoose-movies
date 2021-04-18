const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: {type: String, required: true, unique: true},
    occupartion: {type: String, required: true},
    catchPrase: {type: String, required: true}
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
const mongoose = require("mongoose");

const Celebrity = mongoose.Schema({
    name:{
        type :String,
        require: true,
        unique: true,

    },
    occupation: String,
    catchPhrase: String,
});

module.exports = mongoose.model("Celebrity", Celebrity);
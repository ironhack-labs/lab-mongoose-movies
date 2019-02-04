const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

    
    const moviesSchema = new Schema ({
    name : String,
    occupations: String,    
    catchPhrase:String
    
    })

const Celebrity = mongoose.model("Celebrity", moviesSchema);

    module.exports = Celebrity;
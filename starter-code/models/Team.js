const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema ({
    name: String,
    game: String,
    description: String,
})




const teamModel = mongoose.model("Team", teamSchema)



module.exports = teamModel;
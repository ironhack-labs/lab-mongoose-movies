const mongoose = require("mongoose")

const moviesSchema =new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    genre:{
        type:String
    },
    plot:{
        type:String
    }
},{
    timestamps:true
})

const Movie=mongoose.model("Movie",moviesSchema)

module.exports = Movie
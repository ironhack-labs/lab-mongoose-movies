require("dotenv").config()
const mongoose = require("mongoose")
const data = require("../seed/data")
//const Celebrity = require("../models/Celebrity")
const Movie = require("../models/Movie")

const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
/*
async function seedDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URL, dbOptions)
        const celebrity = await Celebrity.create(data)
        console.log(celebrity)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}
*/

async function seedDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URL, dbOptions)
        const movie = await Movie.create(data)
        console.log(movie)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}


seedDb()
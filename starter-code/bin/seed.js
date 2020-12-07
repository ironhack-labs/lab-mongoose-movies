require("dotenv").config()
const mongoose = require("mongoose")
const data = require("./data")
const Celebrity = require("../models/celebrity")
//const Movies = require(""../models/movies")

const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

async function seedDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URL, dbOptions)
        const celebrities = await Celebrity.create(data)
        console.log(celebrities)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}

/* async function seedDb() {
    try {
      await mongoose.connect(process.env.MONGO_URL, dbOptions)
      const movies = await Movies.create(dataMovies)
      console.log(movies)
      mongoose.connection.close()
    } catch (err) {
      console.error(err)
    }
  } */

seedDb()
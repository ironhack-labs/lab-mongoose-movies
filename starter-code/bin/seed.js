require("dotenv").config()
const mongoose = require("mongoose");
const data = require("./data")
// const Celebrity = require('../models/celebrity');
const Movies = require('../models/movies')

const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

async function seedDb(){
  try{
    await mongoose.connect(process.env.MONGODB_URL, dbOptions)
    const movies = await Movies.create(data)
    console.log(movies)
    mongoose.connection.close();
  }catch(e){
    console.error(e)
  }
}
seedDb()
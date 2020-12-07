require("dotenv").config()
const mongoose = require("mongoose")
const data = require("./data")
const Celebrity = require("../models/Celebrity")
const Movies = require("../models/Movies")

const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

// async function seedDb(){
//   try {
//       await mongoose.connect('mongodb://localhost/starter-code', dbOptions)
//       const celebrities = await Celebrity.create(data)
//       //console.log(celebrities)
//       mongoose.connection.close()
//   }catch(err){
//       console.error(err)
//   }
// }

async function seedDb(){
  try {
      await mongoose.connect('mongodb://localhost/starter-code', dbOptions)
      const movies = await Movies.create(data)
      console.log(movies)
      mongoose.connection.close()
  }catch(err){
      console.error(err)
  }
}

seedDb()
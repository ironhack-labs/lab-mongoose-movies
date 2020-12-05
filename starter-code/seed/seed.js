require("dotenv").config()
const mongoose = require("mongoose")
const data = require("./data")
const Celebrity = require("../models/Celebrity.model")

const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

async function seedDb(){
    try {
        const self = await mongoose.connect(process.env.MONGODB_URL, dbOptions)
        self.connection.dropDatabase();
        const celebrities = await Celebrity.create(data)
        console.log(celebrities)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}

seedDb()
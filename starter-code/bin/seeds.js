require("dotenv").config()
const mongoose = require("mongoose")
const Celebrity = require("../models/Celebrity")

const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  const data = [{
    name: 'Nicole Kidman',
    occupation:"Actor",
    catchPhrase: "Not is Not"
  },{
    name: 'Hugh Jackman',
    occupation:"Actor",
    catchPhrase: "In life, you don't regret the things you do, you regret the things you don't do"
  },{
    name: 'Meryl streep',
    occupation:"Actor",
    catchPhrase: "The great gift of human beings is that we have the power of empathy, we can all sense a mysterious connection to each other."
  }]

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

seedDb()
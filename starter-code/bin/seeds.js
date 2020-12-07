const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");
require("dotenv").config()

const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

const celebValue = [
    {
name: "Beyonce",
occupation: "Singer",
catchPrase: "Who run the world?",
    },

    {
        name: "Mick Jagger",
        occupation: "Singer",
        catchPrase: "I can't get no satisfation",
            },

            {
                name: "Maradona",
                occupation: "Ex-footballer",
                catchPrase: "La pelota no se mancha",
                    },

];
//Llamamos el modelo celebrity y creamos/cerramos
async function seedDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URL, dbOptions)
        const celebrity = await Celebrity.create(celebValue)
        console.log(celebrity)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}
seedDb()

//5.Run the seed file with node to seed your database. node bin/seeds.js


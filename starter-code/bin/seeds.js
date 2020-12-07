require("dotenv").config()
const mongoose = require("mongoose")
const Celebrity = require("../models/Celebrity")
const Movies = require("../models/movie")

const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
//  const data = [{
//    name: 'Nicole Kidman',
//    occupation:"Actor",
//    catchPhrase: "Not is Not"
//  },{
//    name: 'Hugh Jackman',
//    occupation:"Actor",
//    catchPhrase: "In life, you don't regret the things you do, you regret the things you don't do"
//  },{
//    name: 'Meryl streep',
//    occupation:"Actor",
//    catchPhrase: "The great gift of human beings is that we have the power of empathy, we can all sense a mysterious connection to each other."
//  }]
//
//async function seedDb(){
//    try {
//        await mongoose.connect(process.env.MONGODB_URL, dbOptions)
//        const celebrity = await Celebrity.create(data)
//        console.log(celebrity)
//        mongoose.connection.close()
//    }catch(err){
//        console.error(err)
//    }
//}

  const data = [{
    title: "Kadaver",
    genre: "Terror",
    plot: "After a nuclear hecatomb, a traveling car announces a theatrical performance in which spectators are promised a show and dinner.",
  },{
    title: "Holidate",
    genre: "Romance, Comedy",
    plot: "Sloane and Jackson hate vacations, because it forces them to spend time with their respective families and to have to partake in meals they don't feel like going to. When the two meet, they decide to do everything they can to enjoy their free time in some other way.",
  },{
    title: "#Saraitda",
    genre:"Thriller, Terror, Drama",
    plot: "The rapid spread of an unknown infection causes utter chaos in a city. A young man must try to survive locked in his apartment while waiting for help."
  }]

async function seedDb(){
  try {
      await mongoose.connect(process.env.MONGODB_URL, dbOptions)
      const movies = await Movies.create(data)
      console.log(movies)
      mongoose.connection.close()
  }catch(err){
      console.error(err)
  }
}

seedDb()
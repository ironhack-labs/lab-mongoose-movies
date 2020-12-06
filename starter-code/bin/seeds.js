require("dotenv").config()
const mongoose = require('mongoose')
const Celebrity = require("../models/celebrity")
const Movies = require('../models/movies')

const data = [
  {
    name: "Bill Gates",
    ocuppation: "Microsoft",
    catchPhrase: "“Success is a lousy teacher. It seduces smart people into thinking they can’t lose.”"
  }, 
  {
    name: "Steve Jobs",
    ocuppation: "Apple",
    catchPhrase: "“The people who are crazy enough to think they can change the world are the ones who do.”"
  },
  {
    name: "Jeff Bezos",
    ocuppation: "Amazon",
    catchPhrase: "”You can have the best technology, you can have the best business model, but if the storytelling isn't amazing, it won't matter. Nobody will watch.”"
  },
]

const dataMovies = [
  {
  title: "The social network", 
  genre: "Drama", 
  plot: "Facebook foundations"
  }, 
  {
    title: "A beautiful mind", 
    genre: "Drama", 
    plot: "Maths innovation"
  }, 
  {
    title: "Pirates of Silicon Valley", 
    genre: "Comedy", 
    plot: "Apple vs Microsoft"
  }, 
]

const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

async function seedDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL, dbOptions)
    const celebrities = await Celebrity.create(data)
    console.log(celebrities)
    mongoose.connection.close()
  } catch (err) {
    console.error(err)
  }
}

async function seedDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL, dbOptions)
    const celebrities = await Movies.create(dataMovies)
    console.log(celebrities)
    mongoose.connection.close()
  } catch (err) {
    console.error(err)
  }
}

seedDb()
const mongoose = require("mongoose")
require("dotenv").config()

const Celebrity = require("../models/Celebrity")

mongoose.connect(process.env.DB)
.then(()=>  console.log("connect to mongoose"))
.then (() => {
return Celebrity.insertMany([
  {
    name: "David Gomez",
    occupation: "Estrella del Html",
    catchPhrase: "Mira lo que traigo"
  },
  {
    name: "Alberto Soler",
    occupation: "TA",
    catchPhrase: "Máaaama!"
  },
  {
    name: "Carlos Lores",
    occupation: "Pintor CSS",
    catchPhrase: "No es compatible la tarjeta gráfica"
  }
])})
.then (celeb => {
  console.log(celeb)
  mongoose.connection.close()
})





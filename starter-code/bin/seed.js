const mongoose = require("mongoose")

const Celebrity = require("../models/celebrities.model")

const dbName =  "moviesWeekend"
mongoose.connect(`mongodb://localhost/${dbName}`,{ 
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const celebrities = [{
  name: "Vin Diesel",
  occupation: "Rider",
  catchPhrase:  "I live my life a quarter-mile at a time"
},{
  name:"Jason Statham",
  occupation:"Transporter", 
  catchPhrase:  "Rule number three; never open the package"
},{
  name:"Keanu Reeves",
  occupation: "Being the one",
  catchPhrase:  "Choice, the problem is choice"
}]

Celebrity.insertMany(celebrities)
.then(loadedCelebrity => console.log(loadedCelebrity))
.catch(err => console.log("Error al subir los celebrities tipo", err))


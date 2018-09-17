const mongoose = require("mongoose")
const Celebrity = require("../models/Celebrity")

const dbName = "movies"
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [
  {
    name:"Carl Edward Sagan",
    occupation: "Astronomer, cosmologist, astrophysicist, astrobiologist, author, science popularizer, and science communicator in astronomy",
    catchPhrase: "Somewhere, something incredible is waiting to be known."
  },
  {
    name: "Bliss",
    occupation: "Lead Teacher at Ironhack",
    catchPhrase: "Daaaaaaamn!"
  },
  {
    name: "Diego",
    occupation: "Teacher Assitant",
    catchPhrase: "Javascript no te espera."
  }
]

Celebrity.create(celebrities,(error)=>{
  if(error){throw(error)}
  console.log(`Creadas ${celebrities.length} celebridades`)
  mongoose.connection.close()
})
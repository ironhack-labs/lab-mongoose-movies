const mongoose = require('mongoose');
const Celebrity = require("../models/celebrity")

mongoose.connect(`mongodb://localhost/starter-code`);


let celebrities = [

  {
    name: "Britney Spears",
    occupation: "Singer",
    catchPhrase: "It's Britney Bitch" 
  },
  {
    name: "Justin Timberlake",
    occupation: "Singer",
    catchPhrase: "Cry me a river"
  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "All the single ladies"
  }

]

Celebrity.create(celebrities).then(() => {console.log("success")}).catch(() => {console.log("error")})
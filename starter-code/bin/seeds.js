const mongoose = require("mongoose")
const Celebrity = require('../models/Celebrity')

let celebrities = [
    {
        name: "Justin Bieber",
        occupation: "singer",
        catchPhrase: "Baby, baby, ohh"
    },
    {
        name: "Travis Pastrana",
        occupation: "motocross athlete",
        catchPhrase: "lets get it! first double backflip"

    },
    {
        name: "Ashton kutcher",
        occupation: "actor",
        catchPhrase: "im really funny, jajajajajaj"
        
    }
]

mongoose.connect('mongodb://localhost/lab-mongoose-movies',()=>{
   Celebrity.create(celebrities)
   .then(celebrities => {console.log(`Created ${celebrities.length}  celebrities`)
     mongoose.connection.close()
   })
})
const celebrity = require("../models/celebrity")

const celebrities = [
    { 
    name: "George Clooney",
    occupation: "actor",
    catchPhrase: "what else"
},
    {
    name: "Ctangana",
    occupation: "singer",
    catchPhrase: "el madrileno"
    },
    {
    name: "La Rosalia",
    occupation: "singer",
    catchPhrase: "la rosalia"
    }
]

celebrity.create(celebrities)
    .then(all => console.log(`${all.length} created sucessfully`))
    .catch(err => console.log(err))
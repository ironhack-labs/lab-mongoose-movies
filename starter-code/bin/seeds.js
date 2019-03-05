require("dotenv").config();
const mongoose = require("mongoose")

const Celebrity = require('../models/Celebrity')


const dbtitle = 'starter-code'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true })


const celebrity = [{
        name: "Sheryl Sandberg",
        occupation: " COO of Facebook",
        catchPhrase: "A truly equal world would be one where women ran half our countries and companies and men ran half our homes"
    },
    {
        name: "Hellen Keller",
        occupation: "Political Activist & Writer",
        catchPhrase: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart"
        
    },
    {
        name: "Ellen DeGeneres",
        occupation: "American Comedian",
        catchPhrase: "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the heck she is."
    }

]

// Call the Celebrity model's create method with the array as argument
const createCelebrity = celebrity.map(celebrity => {
    const newCelebrity = new Celebrity(celebrity)
    return newCelebrity.save()
    .then(celebrity => {return console.log(celebrity.name)})
    .catch(error => { throw new Error(`Impossible to add the celebrity. ${error}`)})
  })
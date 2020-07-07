require("dotenv").config();
require("./../app");
const Celebrity = require("./../models/Celebrity");


const celebrities = [
    {
        name: "Nicole Kidman",
        occupation: "Actor",
        catchPhrase: "You don't have to be naked to be sexy",
        
    },
    {
        name: "Charlize Theron",
        occupation: "Actor",
        catchPhrase: "I am a relationship girl",
        
    },
    {
        name: "Jennifer Aniston",
        occupation: "Actor",
        catchPhrase: "There are no regrets in life, just lessons.",
        
},

]

Celebrity.create(celebrities)
.then(dbRes => console.log(dbRes))
.catch(dbErr => console.error(dbErr))
// require("dotenv").config();
require("./../app");

const CelebrityModel = require("./../models/Celebrity");

const celebritiesArr = [
    {
        name: "Zidane",
        occupation: "Headbutt",
        catchPhrase: "Voilà"
    },
    {
        name: "Chirac",
        occupation: "Salon de l'agriculture",
        catchPhrase: "C'est beau mais c'est loin"
    },
    {
        name: "PPDA",
        occupation: "Journal TV",
        catchPhrase: "Sans transition"
    }
];

CelebrityModel.insertMany(celebritiesArr)
.then(dbRes => console.log(dbRes))
.catch(dbErr => console.log(dbErr));
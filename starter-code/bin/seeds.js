const Celebrity = require('../models/Celebrity')
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/${process.env.DB}`, {
    useNewUrlParser: true
});
// const router = express.Router()


const artists = [
    {
        firstName: "Jesus",
        lastName: "Garcia",
        occupation: "Soap Opera Artist",
        catchPhrase: "Fuck Jasmin!"
    },

    {
        firstName: "Hans",
        lastName: "Garcia",
        occupation: "Opera Artist",
        catchPhrase: "Tesla Rocks!"
    },
    {
        firstName: "Henry",
        lastName: "Hoyos",
        occupation: "Porn Actor",
        catchPhrase: "I dont Get it!!"
    }
]

Celebrity.create(artists)
    .then(data => console.log(data))

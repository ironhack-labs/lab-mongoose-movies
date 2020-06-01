const mongoose = require("mongoose")
const Celebrity = require("../models/celebrity")
const DB_NAME = 'mongoose-movies'

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const celebrities = [{
    name: "Marcos Mundstock",
    occupation: "Musician",
    catchPhrase: "If you cant convince them, confuse them"
},
{
    name: "Homer Simpson",
    occupation: "Philosopher",
    catchPhrase: "In this house we obey the laws of thermodynamics!"
},
{
    name: "Michael Jordan",
    occupation: "Basketball player",
    catchPhrase: "That´s all i needed"
}]


Celebrity.create(celebrities)
.then (() => console.log("Celebrities created succesfully"))
.catch (error => console.log(error))
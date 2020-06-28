const mongoose = require("mongoose")
const Celebrity = require("../models/celebrity")
const DB_NAME = 'mongoose-movies'
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const celebrities = [{
    name: "Michael Jackson",
    occupation: "Singer",
    catchPhrase: "Just doing as well as you did last time is not good enough."
},
{
    name: "Michael Jordan",
    occupation: "Basketball playerr",
    catchPhrase: "Talent wins games, but teamwork and intelligence wins championships"
},
{
    name: "Eduard Punset",
    occupation: "Philosopher",
    catchPhrase: "El amor existió antes que el alma."
}]
Celebrity.create(celebrities)
.then (() => console.log("Celebrities created succesfully"))
.catch (error => console.log(error))
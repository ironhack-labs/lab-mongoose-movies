const mongoose = require("mongoose")
const Movies = require("../models/movie.js")



const DB_NAME = "starter-code"


mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});





//const celebrities = [{
//    name: "Lady Gaga",
//    occupation: "Singer",
//    catchPhrase: "Some women choose to follow men, and some women choose to follow their dreams. If you're wondering which way to go, remember that your career will never wake up and tell you that it doesn't love you anymore.",
//}, {
//    name: "Bad Gyal",
//    occupation: "Singer",
//    catchPhrase: "He vuelto zorras",
//}, {
//    name: "Adam Brody",
//    occupation: "Actor",
//    catchPhrase: "I'm a fake intellectual",
//}]
//



//Celebrities.create(celebrities)
//    .then(allCelebrities => {
//        console.log(`${celebrities.length} celebrities created on Compass`)
//        mongoose.connection.close()
//    })
//    .catch(err => console.log(`error creating celebrities: ${err}`))


const movies = [{
    title: "film one",
    genre: "comedy",
    plot: "Some women choose to follow men, and some women choose to follow their dreams. If you're wondering which way to go, remember that your career will never wake up and tell you that it doesn't love you anymore.",
}, {
    title: "film two",
    genre: "drama",
    plot: "Some women choose to follow men, and some women choose to follow their dreams. If you're wondering which way to go, remember that your career will never wake up and tell you that it doesn't love you anymore.",

}, {
    title: "Lady film",
    genre: "thriller",
    plot: "Some women choose to follow men, and some women choose to follow their dreams. If you're wondering which way to go, remember that your career will never wake up and tell you that it doesn't love you anymore.",

}]

Movies.create(movies)
    .then(movies => {
        console.log(`${movies.length} movies created on Compass`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`error creating movies: ${err}`))
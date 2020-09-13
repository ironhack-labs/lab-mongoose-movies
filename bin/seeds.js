//Database
const mongoose = require("mongoose")
const Celebrity = require("./../models/celebrity.model")
const Movie = require("./../models/movie.model")

mongoose.connect(`mongodb://localhost/celebrityDb`)

Celebrity.collection.drop()
Movie.collection.drop()

//Data
const celebrities = [
{
    name: "Germán Àlvarez",
    occupation: "Coding Instructor || Creative developer & designer",
    catchPhrase: "thinking about programming is thinking big. Divide and conquer. Ring, ring, the phone rings!!"
},
{
   name: "Freddy mercury",
   occupation: "singer",
   catchPhrase: "My makeup may be falling off but my smile is still there."
},
{
   name: "Stephen Hawking",
   occupation: "theoretical physicist",
   catchPhrase: "Every time I hear about that cat I start to draw my gun (schrödinger's cat)."
}
]

    
const movies = [
{
    title: "Digital stuff",
    genre: "Comedy",
    plot: "An ingenious programmer boy, writer, lover of the mountains. Together with him, we will learn about his great passion as a teacher at Ironhack and how, in one way, he helps his students to be better people and professionals." 

},
{
    title: "Freddy Mercury and me",
    genre: "Comedy-drama",
    plot: "Beyond his excesses and peculiarities, Freddy Mercury, lived one of the most fascinating love stories in rock and roll, and had the fortune to love and be loved by me." 
},
{
      title: "Time theory",
      genre: "Comedy-drama",
      plot: "The glass of water is broken. Falls from a table, it breaks into pieces As the falling glass of water was filmed and passed in slow motion, it became more and more disorderly as time passed ..." 
},
]

//seed

Celebrity 
.create(celebrities)
.then(allCelebrities => {
console.log(`Created ${allCelebrities.length} celebrities`)
mongoose.connection.close()
})

.catch(err => console.log('Error creating the Celebrity DB:', err))

Movie 
    .create(movies)
    .then(allMovies => {
        console.log(`Create ${allMovies.length} movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Error creating the movie DB:', err))
    

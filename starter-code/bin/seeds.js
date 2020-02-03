
const mongoose     = require('mongoose');

const Celeb=require('../models/Celebrity')

const Movie=require('../models/Movie')


const celebData=[
    {    name:'Arnold Schwarzenegger',
        occupation:'Actor',
        catchPhrase:'Hasta la vista, baby'
    },
    {
        name:'Patrick Dempsey',
        occupation:'Actor',
        catchPhrase:'McDreamy'
    },
    {
        name:'Tyra Banks ',
        occupation:'Actor',
        catchPhrase:'Smize'
    }]

const movieData=[
    {
        title:'Made of honor',
        genre:'Romance Comedy',
        plot:'A guy in love with an engaged woman tries to win her over after she asks him to be her maid of honor.'
    },
    {
        title:'Life-Size 2',
        genre:'Fantasy Comedy',
        plot:"Grace is a hot mess in the middle of a quarter-life crisis, realizing that she is in over her head as a toy company's CEO. To make it worse, her wild-child ways are causing the company's stock to plummet."
    },
    {
        title:'Terminator: Dark Fate',
        genre:'Sci-Fi Action',
        plot:'An augmented human and Sarah Connor must stop an advanced liquid Terminator, from hunting down a young girl, whose fate is critical to the human race.'
    }]
mongoose
.connect('mongodb://localhost/movieMongoose',{useCreateIndex:true,useUnifiedTopology:true})
.then( async x=>{
    console.log('Connected to Mongo!')
    await Celeb.create(celebData)
                .then(success=>console.log('Celebrities imported to DB'))
                .catch(err=>console.log('Error importing data'))
    await Movie.create(movieData)
                .then(success=>console.log('Movies imported to DB'))
                .catch(err=>console.log('Error importing data'))
    await mongoose.connection.close()
    console.log('Connection closed')
})
.catch(err=> console.log('Error conecting to  Mongo'))


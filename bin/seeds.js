const mongoose = require('mongoose')
const Movie = require('../models/movie')

const dbName = 'Mongoose-Movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const movies = [
    {
        title: "The Count of Monte Cristo",
        genre: "Historical",
        plot: "Dantes is imprisoned on the island prison of Chateau d'If for 13 years, where he plots revenge against those who betrayed him. With the help of another prisoner, he escapes the island and proceeds to transform himself into the wealthy Count of Monte Cristo as part of his plan to exact revenge.",
    },
    {
        title: "The Notebook",
        genre: "Romance",
        plot: "At a modern-day nursing home, an elderly man, Duke, reads a romantic story from his notebook to a fellow patient. In 1940, at a carnival in Seabrook Island, South Carolina, poor lumber mill worker Noah Calhoun sees 17-year-old heiress Allison Hamilton, who is spending the summer in town with her parents...",
    },
    {
        title: "Dear John",
        genre: "Romance",
        plot: "It follows the life of a soldier after he falls in love with a young woman (Amanda Seyfried). They decide to exchange letters to each other after he is deployed to the war. The film was released in North America on February 5, 2010, by Screen Gems.",
    }
]

Movie
    
    .create(movies)
    .then(allmoviesCreated => {
        console.log(`Created ${allmoviesCreated.length} movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))
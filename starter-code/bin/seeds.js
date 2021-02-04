// Iteration #1
require("../config/db.config");
const faker = require('faker');

const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");
const mongoose = require('mongoose');


const celebrities = []
const movies = []

for(let i=0; i<40; i++){
    celebrities.push({
        name: faker.name.findName(),
        occupation: faker.name.jobTitle(),
        catchPhrase: faker.company.catchPhrase(),
        image: faker.image.people()
    })
    movies.push({
        title: faker.lorem.words(),
        genre: faker.music.genre(),
        plot: faker.lorem.paragraph()
    })
}

Celebrity.deleteMany()
.then( () => 
    Celebrity.create(celebrities)
    .then(celebrity => celebrity.forEach(celebrity => console.log(`New celebrity added: ${celebrity.name}`)))
    .catch(error => console.log(error))
)
.catch(console.log('An error happened while saving a new celebrity'))

Movie.deleteMany()
.then( () => 
    Movie.create(movies)
    .then(movie => movie.forEach(movie => console.log(`New movie added: ${movie.title}`)))
        .then(() => {
            console.log('Mongoose conection close')
            mongoose.connection.close()
        })
        .catch(error => console.log(error))
    .catch(error => console.log(error))
)
.catch(console.log('An error happened while saving a new movie'))





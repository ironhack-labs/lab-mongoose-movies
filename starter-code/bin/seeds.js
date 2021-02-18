const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')
mongoose.connect('mongodb://localhost/starter-code')

const firstsCelebrities = [
    {
        name: 'Carl Sagan',
        occupation: 'astronomer, astrophysicist, cosmologist, astrobiologist, writer and science popularizer',
        catchPhrase: 'Somewhere, something incredible is waiting to be discovered.'
    },
    {
        name: 'Morgan Freeman',
        occupation: ' actor and director',
        catchPhrase: 'Human beings are more concerned with having than with being.'
    },
    {
        name: 'Virginia Woolf',
        occupation: 'writer',
        catchPhrase: 'There is no barrier, lock or bolt that you can impose on the freedom of my mind'
    },
]

// Celebrity.create(firstsCelebrities)
//     .then(succ => console.log(`Success seeding initialCelebrities `))
//     .catch(error => console.log(`Error seeding initialCelebrities `))


const firstMovies = [
    {
        title: "The Green Mile",
        genre: "Drama and fantasy",
        plot: "The book tells the life of Paul Edgecomb, who as an old man tells his story as a 'death row' officer in Cold Mountain Prison, in the state of Louisiana, during the 1930s. Edgecomb has among his prisoners: a character with supernatural powers, who is able to heal people and perform other types of miracles. During the course of history, quite stark aspects can be distinguished about the reality of prisoners in the United States."
    },
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        plot: "In 1947, Andrew Dufresne (Tim Robbins), vice president of a major bank in Portland, Maine, is tried for the murder of his wife and a man with whom she was having an affair. Although he insists that he is innocent, the evidence is reason enough for the judge to sentence him to serve two life sentences in Shawshank State Prison.",
    },
    {
        title: "Inception",
        genre: "SCI-FI",
        plot: "Dom Cobb (DiCaprio) is an expert in the art of appropriating, during sleep, the secrets of someone else's subconscious. Cobb's uncanny ability has made him a highly sought after man in the world of espionage, but he has also condemned him to being a fugitive and consequently giving up on leading a normal life. His only chance to change his life will be to do the exact opposite of what he has always done: inception, which consists of implanting an idea in the subconscious instead of subtracting it. However, his plan is complicated by the intervention of someone who seems to predict his every move, someone only Cobb can uncover"
    },
];

Movie.create(firstMovies)
    .then(succ => console.log(`Success seeding initialCelebrities `))
    .catch(error => console.log(`Error seeding initialCelebrities `))
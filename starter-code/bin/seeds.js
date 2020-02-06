const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

const dbName = 'Celebrity'
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const celebrities = [{
        name: "Pulpo Paul",
        occupation: "Visionary",
        catchPhrase: "Glub, glub"
    },
    {
        name: "Antonio De la Torre",
        occupation: "Actor",
        catchPhrase: "La felicidad es un yoyó, tan pronto sube como baja."
    },
    {
        name: "Fran Naranjo",
        occupation: "Teacher Assistant",
        catchPhrase: "Si funca, funca"
    }
];

const movies = [{
        title: "Parasitos",
        genre: "Drama",
        plot: "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident."
    },
    {
        title: "Alabama Monroe",
        genre: "Drama",
        plot: "Elise and Didier fall in love at first sight, in spite of their differences. He talks, she listens. He's a romantic atheist, she's a religious realist. When their daughter becomes seriously ill, their love is put on trial."
    },
    {
        title: "Mommy",
        genre: "Drama",
        plot: "A widowed single mother, raising her violent son alone, finds new hope when a mysterious neighbor inserts herself into their household."
    }
];

Celebrity.create(celebrities, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
});

Movie.create(movies, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();
});

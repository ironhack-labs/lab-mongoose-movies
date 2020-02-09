const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movies.model')

const celebrities = [{
        name: "Shaquille O' Neal",
        occupation: 'Basketball Player',
        catchPhrase: 'Reporter: "Did you visit the Parthenon during your trip to Greece?" Shaquille O\'Neal : “I can\'t really remember the names of the clubs we went to.”'
    },
    {
        name: 'Kanye West',
        occupation: 'Rapper',
        catchPhrase: "I actually don't like thinking. I think people think I like to think a lot. And I don't. I do not like to think at all."
    },
    {
        name: "Britney Spears",
        occupation: "Singer",
        catchPhrase: "I’ve never really wanted to go to Japan. Simply because I don’t like eating fish. And I know that’s very popular out there in Africa"
    }

]
const movies = [{
        title: "Parasite",
        genre: 'Drama',
        plot: "Bong Joon Ho brings his work home to Korea in this pitch-black modern fairytale. Meet the Park Family: the picture of aspirational wealth. And the Kim Family, rich in street smarts but not much else. Be it chance or fate, these two houses are brought together and the Kims sense a golden opportunity. Masterminded by college-aged Ki-woo, the Kim children expediently install themselves as tutor and art therapist, to the Parks. Soon, a symbiotic relationship forms between the two families. The Kims provide 'indispensable' luxury services while the Parks obliviously bankroll their entire household. When a parasitic interloper threatens the Kims' newfound comfort, a savage, underhanded battle for dominance breaks out, threatening to destroy the fragile ecosystem between the Kims and the Parks."
    },
    {
        title: 'Knives Out',
        genre: 'Mistery and Suspense',
        plot: "Acclaimed writer and director Rian Johnson (Brick, Looper, Star Wars: The Last Jedi) pays tribute to mystery mastermind Agatha Christie in KNIVES OUT, a fun, modern-day murder mystery where everyone is a suspect. When renowned crime novelist Harlan Thrombey (Christopher Plummer) is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc (Daniel Craig) is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death. With an all-star ensemble cast including Chris Evans, Ana de Armas, Jamie Lee Curtis, Toni Collette, Don Johnson, Michael Shannon, LaKeith Stanfield, Katherine Langford and Jaeden Martell, KNIVES OUT is a witty and stylish whodunit guaranteed to keep audiences guessing until the very end."
    },
    {
        title: "Little Women",
        genre: "Drama",
        plot: "Writer-director Greta Gerwig (Lady Bird) has crafted a Little Women that draws on both the classic novel and the writings of Louisa May Alcott, and unfolds as the author's alter ego, Jo March, reflects back and forth on her fictional life. In Gerwig's take, the beloved story of the March sisters - four young women each determined to live life on her own terms -- is both timeless and timely. Portraying Jo, Meg, Amy, and Beth March, the film stars Saoirse Ronan, Emma Watson, Florence Pugh, Eliza Scanlen, with Timothée Chalamet as their neighbor Laurie, Laura Dern as Marmee, and Meryl Streep as Aunt March."
    }

]


const dbName = 'celebrities-w4-day5'
const connect = mongoose.connect(`mongodb://localhost/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.log(`Error en la conexion de DB: ${err}`))
    .then(x => {
        Celebrity.collection.drop()
        Movie.collection.drop()
    })
    .then(() => Celebrity.insertMany(celebrities))
    .then(() => Movie.insertMany(movies))
    .then(() => {
        console.log(`Inserted ${celebrities.length} celebrities`)
        console.log(`Inserted ${movies.length} movies`)
        return
    })
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => mongoose.disconnect())
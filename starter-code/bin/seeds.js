require('dotenv').config()
require('../configs/db.config')
const Celebrity = require('../models/celebrity.Model')
const Movie = require('../models/movie.Model')

const celebrities = [
    {
        name: 'Will Smith',
        occupation: 'Actor',
        catchPhrase: 'I got my eyes on you You re everything that I see, I want your hot love and emotion Endlessly',
        image: 'https://graziamagazine.com/mx/wp-content/uploads/sites/13/2018/08/will-smith-luce-espectacular-a-semanas-de-cumplir-50-anos-destacada.jpg?fit=4200%2C2795'
    },

    {
        name: 'Bryan Cranston',
        occupation: 'Actor',
        catchPhrase: 'Take a chance. Take a risk. Find that passion and rekindle it. Fall in love all over again. It`s really worth it.',
        image: 'https://www.rockandpop.cl/wp-content/uploads/2020/12/1f289cd1a244a837b3d946160b49e54d.jpg'
    },

    {
        name: 'Johnny Depp',
        occupation: 'Actor',
        catchPhrase: 'Your love makes me strong. Your hate makes me unstoppable',
        image: 'https://www.infobae.com/new-resizer/jcGKXWlbUfEgPUQ8wJUmMpR6Rwk=/420x280/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/MAOQOBL3AQAWFRJVX4D3LEC23I.jpg'
    },

    {
        name: 'Robert Downey Jr',
        occupation: 'Actor',
        catchPhrase: 'Don’t be afraid of failure. This is the way to succeed.',
        image: 'https://cnet1.cbsistatic.com/img/0vjNegPkODZ9UWGx_lP0RjxUYUU=/940x0/2019/05/16/c2795f52-0dde-476b-9f1b-57257311d6b6/gettyimages-1144499197.jpg'
    }
]

const movies = [
    {
        title: 'Bad Boys for Life',
        genre: 'Action',
        plot: 'Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city',
        image: 'https://pics.filmaffinity.com/Bad_Boys_for_Life-496204633-large.jpg'
    },

    {
        title: 'Breakind bad',
        genre: 'Action',
        plot: 'Walter White un profesor de química de secundaria agobiado por problemas económicos para sostener a su familia y con un cáncer terminal, toma una decisión para ganar dinero y transforma un viejo vehículo en un laboratorio de metanfetaminas rodante.',
        image: 'https://i.blogs.es/16e585/breaking-bad/450_1000.jpg'
    },

    {
        title: 'Mortdecai',
        genre: 'Comedy',
        plot: 'Armado solo con su buena apariencia y especial encanto, un comerciante de arte viaja por el mundo para encontrar una pintura robada que se dice contiene el código de una cuenta bancaria llena de oro nazi.',
        image: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/mortdecai/carteles-de-personajes-de-mortdecai/mordecai-jd/23425508-1-esl-ES/MORDECAI-JD.jpg?resize=480:*'
    },

    {
        title: 'Iron Man',
        genre: 'Action',
        plot: 'Un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo.',
        image: 'https://i.blogs.es/7ccbec/iron-man/840_560.jpg'
    }
]

Promise.all([Celebrity.deleteMany(), Movie.deleteMany()])
    .then(() =>{
        Celebrity.create(celebrities)
            .then((c) => {
                console.log(`Celebrities add to database`)
            })
        Movie.create(movies)   
            .then((c) => {
                console.log(`Movies add to database`)
            })
    })
    .catch((e) => console.log(`An error has occurred in DB`, e))
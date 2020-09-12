const mongoose = require('mongoose')

const Celebrity = require('../models/celebrity')

const dbtitle = 'films'
mongoose.connect(`mongodb://localhost/${dbtitle}`)

Celebrity.collection.drop()

const celebrity =[

{
    name: "Susanita",

    occupation: "actriz",

    catchPhrase : "antes muerta que sencilla"
},
{
    name: "Lola",

    occupation: "Cantante",

    catchPhrase : "la visa es una tombola"
},
{
    name: "Guillermo ",

    occupation: "programador",

    catchPhrase : "No me sale el delete de la forma de la guia pero si poniendolo en  details de la ficha"
},


]


Celebrity.create(celebrity)
.then(celebCreate => console.log("se han creado ", celebCreate.length,"actrices"))
.catch(err => console.log("error",err))

// movies!

const Movies = require('../models/movie')


Movies.collection.drop()

const movies =[

{
    title: "mision imposible",

    genre: "accion",

    plot : "peliculon niñohhh"
},
{
    title: "El señor de los anillos",

    genre: "ficcion",

    plot : "un enano se recorre 700 km a pata  para tirar un p... anillo"
},
{
    name: "avatar ",

    genre: "sci-fi",

    plot : "aliens super monos son atacados por humanos (como siempre)"
},


]

Movies.create(movies)
.then(moviesCreate => console.log("se han creado ", moviesCreate.length,"peliculas"))
.catch(err => console.log("error",err))
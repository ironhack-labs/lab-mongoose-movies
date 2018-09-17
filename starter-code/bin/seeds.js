// const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');

// const dbName = 'celebrity-project';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//     {   name: "Bob Marley",
//         occupation: "Cantante",
//         catchPhrase: "El respeto de uno termina donde termina el respeto de otro"
//     },

//     {   name: "Harrison Ford",
//         occupation: "Actor",
//         catchPhrase: "Que la fuerza te acompañe"
//     },

//     {   name: "Marlom Brandom",
//         occupation: "Actor",
//         catchPhrase: "Voy a hacerle una oferta que no podrá rechazar"
//     }]
//     Celebrity.create(celebrities, (err) => {
//         if (err) { throw(err) }
//         console.log(`Created ${celebrities.length} celebrities`)
//         mongoose.connection.close()
//       });


const mongoose = require ('mongoose');
const Movie = require('../models/Movie');

const dbName = 'celebrity-project';
mongoose.connect(`mongodb://localhost/${dbName}`);
const movies = [
    {   title : "El padrino",
       genre : "Crimen",
       plot : "mafia italo-america"},
    {
        title : "Malditos bastardos",
        genre : "Thriller",
        plot : "Segunda guerra mundial"
    },
    { 
        title : "Pocahontas",
        genre : "aventuras",
         plot : "Indios"
    }
]

Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close()
  });


const mongoose = require("mongoose") ;
// const celebrityModel = require("./../Models/Celebrity") ;
const movieModel = require("./../Models/Movie");

// const celebrities = [
//     {name: "Jean-Pierre Timballe",
//     occupation: "dessoudeur",
//     catchPhrase: "Vas-y Roger",},
//     {name: "Roger Cageot",
//     occupation: "soudeur",
//     catchPhrase: "OK JP",},
//     {name: "Magdalena Frida Carmen Kahlo Calderón",
//     occupation: "artist",
//     catchPhrase: "Feet, what do I need you for when I have wings to fly?",}
// ]

const movies = [
    {title: "Les Dents de l'amer",
        genre: "documentaire gastronomique",
        plot: "Certaines pleuplades du 16e arrondissement de Paris découvrent à l'occasion d'une méprise le goût du café Lidl. Passé le choc initial, quelques habitants décident de se mobiliser pour empêcher la vente de café à moins de 35 euros le kilo"},
        {title: "L'ironhack du sort",
        genre: "drame",
        plot: "Au dernier étage d'un immeuble parisien, cinq étudiants bien décidés à obtenir une certification en information passent leur weekend à travailler sur leurs labs. Mais quand un TA ote sa casquette, tout est remis en question..."},
        {title: "Rendez-vous à l'array de bus",
        genre: "romcom",
        plot: "Quand éclatent les grèves, deux webdev que tout sépare se retrouvent contraints à covoiturer. Sauront-ils se rencontrer au-delà des différences ?"},
]

mongoose
.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
.then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    movieModel
        .insertMany(movies)
        .then(dbRes => {
            console.log("Bonjour, je suis dans seeds, j'ai bien importé la base de données. Si ce message apparait plusieurs fois c'est pas terrible");
        })
        .catch(err => {
            console.error('Error connecting to mongo', err)
        })
})
.catch(err => {
    console.error("Error connectigne tout mongo c'est une catastrophe", err);
});

// mongoose
// .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
// .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//     celebrityModel
//         .insertMany(celebrities)
//         .then(dbRes => {
//             console.log("Bonjour, je suis dans seeds, j'ai bien importé la base de données. Si ce maessage apparait plusieurs fois c'est pas terrible");
//         })
//         .catch(err => {
//             console.error('Error connecting to mongo', err)
//         })
// })
// .catch(err => {
//     console.error("Error connectigne tout mongo c'est une catastrophe", err);
// });


    
module.export = movies ;

// module.export = celebrities ;
const Celebrity = require("../models/Celebrity");
const Movie = require('../models/Movie');
const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/${process.env.PORT}`)

// const someCele = [
//     {
//         firstName: "Hans",
//         lastName: "Garcia",
//         occupation: "Tesla Hacker",
//         catchPhrase: "Jesus buy a fucking Macbook"
//     },
//     {
//         firstName: "Fabrizio",
//         lastName: "Policarpo",
//         occupation: "Drug Master",
//         catchPhrase: "I prefer to be dead than being UX/UI Designer" 
//     },
//     {
//         firstName: "Henry",
//         lastName: "Hoyo",
//         occupation: "Master House",
//         catchPhrase: "Care chimba, bobo hijoeputa" 
//     }
// ]

// Celebrity.create(someCele)
// .then( newCelebrity => console.log("Added new celebrity", newCelebrity))
// .catch(err => console.log("An error happened ", err));

const someMovies = [
{
    title: "Titanic",
    genre: "Epic Romance",
    plot: "In 1996, treasure hunter Brock Lovett and his team board the research vessel Akademik Mstislav Keldysh to search the wreck of RMS Titanic for a necklace with a rare diamond, the Heart of the Ocean.\
     They recover a safe containing a drawing of a young woman wearing only the necklace dated April 14, 1912, the day the ship struck the iceberg.\
    Rose Dawson Calvert, the woman in the drawing, is brought aboard Keldysh and tells Lovett of her experiences aboard Titanic."
},
{
    title: "Kung Fu hustle",
    genre: "action comedy",
    plot: "Set in Canton, China in the 1940s, the story revolves in a town ruled by the Axe Gang, Sing who desperately wants to become a member.\
     He stumbles into a slum ruled by eccentric landlords who turns out to be the greatest kung-fu masters in disguise.\
      Sing's actions eventually cause the Axe Gang and the slumlords to engage in an explosive kung-fu battle.\
     Only one side will win and only one hero will emerge as the greatest kung-fu master of all"
},
{
    title: "Brothers",
    genre: "Psychological drama war film",
    plot: "Before leaving on his second tour in Afghanistan, Marine Captain Sam Cahill, a leader, an athlete, a good husband and father, welcomes his screw-up brother Tommy home from prison. \
    He'd robbed a bank. In country, Sam's helicopter is shot down and all are presumed dead.\
     Back home, while Sam wastes away as a prisoner in a remote encampment, Tommy tries to take care of the widow and her two children. \
     While imprisoned, Sam experiences horrors unbearable, so when he's rescued and returns home, he's silent, detached, without affect, and he's convinced his wife and brother have slept together.\
     Demons of war possess him; what will silence them?"
}
]

Movie.create(someMovies)
.then(dataSaved => console.log("The movies were successfully saved to DB!"))
.catch(err => console.log("An error happened when adding new movies to DB", err))
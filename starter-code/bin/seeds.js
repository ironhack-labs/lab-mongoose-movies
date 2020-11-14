const mongoose = require('mongoose');
const Movies = require('../models/Movies');
 
const dbCelebrities = 'celibrities-db';
mongoose.connect(`mongodb://localhost/${dbCelebrities}`);


// const celebrityArr = [
//     {
//         name: 'Donald Trump',
//         ocupation: 'Ex-President of EE.UU',
//         catchPhrase: 'You are somewhat more traditional politicians (than me).'
//     },
//     {
//         name: 'Will Smith',
//         ocupation: 'Actor',
//         catchPhrase: 'Life is lived on the edge'
//     },
//     {
//         name: 'Clint Eastwood',
//         ocupation: 'Actor',
//         catchPhrase: "I have a very strict gun control policy: if there's a gun around, I want to be in control of it.."
//     },

// ];

const moviesyArr = [
    {
        title: 'Die Hard',
        genre: 'Action',
        plot: 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.'
    },
    {
        title: 'E.T.',
        genre: 'Sci-Fi',
        plot: 'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.'
    },
    {
        title: 'Thelma & Louise',
        genre: 'Drama',
        plot: "Two best friends set out on an adventure, but it soon turns around to a terrifying escape from being hunted by the police, as these two girls escape for the crimes they committed."
    },

];


Movies.create(moviesyArr, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${moviesyArr.length} movies`)
    mongoose.connection.close();
  });
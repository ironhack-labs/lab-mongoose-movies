const mongoose = require('mongoose');
const Celebrities = require('../models/Celebrity');

const celebrities = [
    {
        name: 'Beyoncé',
        occupation: 'Singer',
        catchPhrase: 'Singer, composer, dancer, actress, model, fashion designer and American businesswoman.'
    },
    {
        name: 'Dwayne Johnson',
        occupation: 'Actor',
        catchPhrase: 'American professional actor and wrestler, popularly known as The Rock, who works with sporadic visits to WWE and as a well-known actor in various films.'
    },
    {
        name: 'Michael Jordan',
        occupation: 'Basketball player',
        catchPhrase: 'Former American basketball player. Now is the owner of the NBA team the Charlotte Hornets, and is considered by most fans and specialists as the best basketball player of all time.'
    },
]

mongoose
    .connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        celebrities.forEach(element => {
            Celebrities.create(element, function (err, user) {
                if (err) {
                    console.log('An error happened:', err);
                } else {
                    console.log('The celebrity is saved and its value is: ', element);
                }
            });
        });
        // Celebrities.insertMany(celebrities)
        // .then((data)=>{
        //     console.log(data)
        //     console.log("Chachi");
        //     mongoose.disconnect();
        // }).catch((err) =>{
        //     console.log(err);
        // })
    })
    .catch(err => {
        console.error('Error connecting to Mongo', err)
    })
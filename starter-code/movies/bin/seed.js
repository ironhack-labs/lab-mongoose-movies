const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebrities')
    .then(() => {
        const CelebrityData = [{
            name  : 'Frangular',
            occupation : 'Frontend',
            catchPhrase : 'hola'
        }, {
            name: 'SaraScript',
            occupation : 'Frontend',
            catchPhrase : 'hola'
        }, {
            name: 'JuanQuery',
            occupation : 'Backend',
            catchPhrase : 'hola'
        }]

        const MovieData = [{
          title: "Matrix",
          gerne: "Sci-fi",
          plot:  "Follow the white rabit..."
        }, {
          title: "Matrix II",
          gerne: "Sci-fi",
          plot:  "Follow the white rabit..."
        }, {
          title: "Matrix III",
          gerne: "Sci-fi",
          plot: "Follow the white rabit..."
        }]

        let celebrityObj = CelebrityData.map(p => new Celebrity(p));

        let promisesCelebrity = celebrityObj.map(p => new Promise((resolve, reject) => {
            p.save((err, obj) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`New celebity created [${obj.name}] with ID:${obj._id}`);
                    resolve(true)
                }
            })
        }));

        let movieObj = MovieData.map(p => new Movie(p));

        let promisesMovie = movieObj.map(p => new Promise((resolve, reject) => {
            p.save((err, obj) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`New movie created [${obj.title}] with ID:${obj._id}`);
                    resolve(true)
                }
            })
        }));

        Promise.all([promisesCelebrity, promisesMovie]).then(() => {
            mongoose.connection.close()
        })
    });

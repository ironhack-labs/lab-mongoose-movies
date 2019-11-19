const mongoose = require("mongoose");
const Celebrity = require("./../models/celebrity");
const Movie = require("./../models/movie");

mongoose.connect('mongodb://localhost:27017/celebritys', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        const celebrities = [
            {
                name: "Tom Cruise",
                occupation: "actor",
                catchPhrase: "Whishkey for breakfast"
            },
            {
                name: "Beyonce",
                occupation: "singer",
                catchPhrase: "Blablabalbalabla"
            },
            {
                name: "Duck",
                occupation: "duckler",
                catchPhrase: "Quckster"
            }
        ]
        
        const movies = [
            {
                title: "Movie 1",
                genre: "terror",
                plot: "lalalalaa",
            },
            {
                title: "Movie 2",
                genre: "horror",
                plot: "lololooolool",
            },
            {
                title: "Movie 3",
                genre: "spooky",
                plot: "leellelelel",
            }
        ]

        const pr1 = Celebrity.create(celebrities)
        const pr2 = Movie.create(movies)
        
        Promise.all([pr1, pr2])
            .then(()=>{
                mongoose.connection.close()
            })
            .catch((err)=>{console.log(err);
            })            
    })
    .catch(err=>console.log(err))
    
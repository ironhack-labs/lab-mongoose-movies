const mongoose = require("mongoose")
const Celebrity = require("../models/celebrity")
const Movies = require("../models/movie")

mongoose.connect('mongodb://localhost/movies')
/*
const celebrity =[
    {
        name: 'Nikola Tesla',
        occupation:'Inventor',
        catchPhrase: 'I don’t care that they stole my idea — I care that they don’t have any of their own'
    },
    {
        name:'Prince',
        occupation:'Cantante',
        catchPhrase:'A strong spirit transcends rules'
    },
    {
        name:'Carl Sagan',
        occupation: 'Astronomo',
        catchPhrase:'Somewhere, something incredible is waiting to be known'
    }
]

Celebrity.create(celebrity).then(() => {
    console.log('se guardaron')
    mongoose.connection.close()
}).catch((err) => {
    console.log(err)
}
)
*/

const movie =[
    {
        title:'Karate Kid',
        genre:'accion',
        plot:'Remake adaptado a la época contemporánea del clásico de los 80 "Karate Kid". Sigue la historia de Dre, un joven skateboarder que se muda a China con su madre soltera por motivos de trabajo. Cuando un matón local empieza a molestarle, el joven encontrará un apoyo en Mr. Han, un hombre que se ofrece a enseñarle artes marciales para defenderse de sus agresores. (FILMAFFINITY)'
    },
    {
        title:'Suspiria',
        genre:'Gore',
        plot:'Una joven (Jessica Harper) ingresa en una exclusiva academia de baile la misma noche en que asesinan a una de las alumnas. La subdirectora del centro es la amable Madame Blank, que brinda a la nueva alumna las comodidades y facilidades necesarias para su aprendizaje. Pero, poco a poco, una atmósfera malsana se va apoderando del lugar, y la estancia de la joven se va convirtiendo en una verdadera pesadilla. (FILMAFFINITY)'
    },
    {
        title:'La risa en vacaciones 3',
        genre:'comedia',
        plot:'Divertidas cámaras escondidas en las que se intercalan algunas actuaciones de artistas representando situaciones chuscas de la vida real. (FILMAFFINITY)'
    }

]


Movies.create(movie).then( () =>{
    console.log('se guardaron las peliculas')
    mongoose.connection.close()
}).catch( (err) =>{
    console.log(err)
})

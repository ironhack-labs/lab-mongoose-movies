const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

mongoose.connect(`mongodb://localhost/stars-films`);

//PARA BORRAR ANTES DE VOLVER A EJECUTAR

Celebrity.collection.drop();
Movie.collection.drop();


/*const celebrity = [
    {
        name: "Chiquito de la Zalcada",
        occupation: "Humorista",
        catchPhrase: "Jandemor"
    },
    {
        name: "Danny BeNito",
        occupation: "Actor",
        catchPhrase: "Soy un pingüino. O algo así era."
    },
    {
        name: "Calderón de la Mierda",
        occupation: "Escritor",
        catchPhrase: "La vida es una barca"
    },
]*/


const movies = [
    {
        title: "Un charquito en medio del mar",
        genre: "Drama",
        plot: "La apacible pero anodina vida de Francesca Johnson (Meryl Streep), un ama de casa que vive en una granja con su familia, se ve alterada con la llegada de Robert Kincaid (Chiquito de la Zalcada), un veterano fotógrafo de la revista Pronto, que visita el condado de Madison (Iowa) para fotografiar sus viejos puentes. Cuando Francesca invita a Robert a cenar, un amor verdadero y una pasión desconocida nacerá entre ellos.",
        celebrity: {
            name: "Chiquito de la Zalcada",
            occupation: "Humorista",
            catchPhrase: "Jandemor"
        }
    },
    {
        title: "Un charquito en medio del mar II",
        genre: "Comedia",
        plot: "Brian (Enrique Fransancisco) nace en un pesebre de Belén el mismo día que Jesucristo. Un cúmulo de desgraciados y tronchantes equívocos le harán llevar una vida paralela a la del verdadero Hijo de Dios. Sus pocas luces y el ambiente de decadencia y caos absoluto en que se haya sumergida la Galilea de aquellos días, le harán vivir en manos de su madre, de una feminista revolucionaria y del mismísimo Poncio Pilatos, su propia versión del calvario.",
        celebrity: {
            "name": "Enrique Fransancisco",
            "occupation": "Cómico",
            "catchPhrase": "No le hace falta catch phrase."
        }
    },
    {
        title: "Un charquito en medio del mar III: Revenge.",
        genre: "Acción",
        plot: "Bryan Mills (Eunegio) es un agente especial jubilado. Pero cuando su hija Kim (Maggie Grace) es secuestrada en París por una organización criminal albanokosovar, tendrá que volver a la acción para intentar salvarla. La banda se dedica a una red de trata de blancas, por lo que Mills sabe que sólo dispone de unas horas para conseguir rescatarla antes de que se pierda el rastro de su hija.",
        celebrity: {
            "name": "Eunegio",
            "occupation": "Cómico",
            "catchPhrase": "Saben aquel que diu"
        }

    }

]

//SEED!

//SEED CELEBRITY
// Celebrity.create(celebrity)
//     .then(famousePeople => {
//         console.log(`Se han creado ${famousePeople.length} famosos`)
//         mongoose.connection.close();
//     })
//     .catch(err => console.log('Error creando famosos, call Salvame!', err))

//SEED MOVIE

// Movie.create(movie)
//     .then(movies => {
//         console.log(`Se han creado ${movies.length} pelis.`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('Error al crear pelis', err))


const createCelebrities = movies.map(movie => {
    const newCelebrity = new Celebrity(movie.celebrity)
    return newCelebrity.save()
        .then(star => {
            return star.name;
        })
        .catch(error => {
            throw new Error(`Impossible to add the celebrity. ${error}`)
        })
})

let findCelebrities = Promise.all(createCelebrities)
    .then(celebrities => {
        return movies.map(movie => {
            return Celebrity.findOne({ name: movie.celebrity.name, occupation: movie.celebrity.occupation, catchPhrase: movie.celebrity.catchPhrase })
                .then(celebrity => {
                    if (!celebrity) {
                        throw new Error(`unknown star ${movie.celebrity.name}`);
                    }
                    return Object.assign({}, movie, { celebrity: celebrity._id });
                })
        })
    })

    .catch(error => {
        throw new Error(error)
    })

const saveMovies = findCelebrities.then(findCelebrities => {
    return Promise.all(findCelebrities)
        .then(movies => {
            return movies.map(movie => {
                const newMovie = new Movie(movie)
                return newMovie.save()
            })
        })
}).then(savedMovies => {
    Promise.all(savedMovies)
        .then(movies => movies.forEach(movie => console.log(`se ha creaco la peli ${movie.title}`)))
        .then(() => mongoose.connection.close())
        .catch(err => console.log("Error creando las pelis", err))
})
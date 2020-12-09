//Wants to insert many in the crudtime database
require("dotenv").config();



const MovieModel = require ("./../models/movie")


const movies = [
{
    title: "Jurassic Park",
    genre: "Adventure",
    plot: "A great movie about dinosaurs"
},
{
    title: "Home alone",
    genre: "Comedy",
    plot: "It's a boy that... you know"
},
{
    title: "Bridget Jones",
    genre: "Drama",
    plot: "You know that blonde girl.."
},
]

//empty database
MovieModel.deleteMany().then(async () => {
    
    await MovieModel.insertMany(movies);
    console.log("ok: nb a celebrities has been inserted")
}).catch(err => {
    console.log(err)
})

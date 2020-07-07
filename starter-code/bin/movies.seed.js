require("./../app");

const MovieModel = require("./../models/Movie");

const moviesArr = [
    {
        title: "Titanic",
        genre: "Sinking boat",
        plot: "A love story between a boat and an iceberg"
    },
    {
        title: "The Lord of the Ring",
        genre: "Adventure",
        plot: "It would be too long to explain"
    },
    {
        title: "OSS 117",
        genre: "Comedy",
        plot: "How is you blanket ?"
    }
];

MovieModel.insertMany(moviesArr)
.then(dbRes => console.log(dbRes))
.catch(dbErr => console.log(dbErr));
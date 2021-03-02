require("./../config/mongoDb");

// require the model celebrity here
const movieModel = require("./../../models/movie");

const movies =[{
    title: "Leon",
    genre:  "Action,Drama",
    plot: "When 12-year-old Mathilda's family is killed, her neighbour Leon, who is a professional assassin, reluctantly takes her under his wing and teaches her the secrets of his trade,",
    cast: ["Natalie Portman", "Jean Reno", "Gary Oldman", "Danny Aiello","Michel Badalucco"]
},
{
    title: "Gone with the wind",
    genre:  "Romance,Drama",
    plot: "American classic in which a manipulative woman and a roguish man carry on a turbulent love affair in the American south during the Civil War and Reconstruction",
    cast:["Vivien Leigh", "Clarc Gable", "Olivia de Havilland", "Hattie McDaniel","Margaret Mitchel","Leslie Howard","Ann Rutherford"]
}
];

movieModel.insertMany(movies)
.then(dbSuccess => {
    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
});
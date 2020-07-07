require("dotenv").config();
require("./../app.js");
const celebrityModel = require("./../models/celebrity");
const movieModel = require("./../models/movies");

const demoCelebrity = [
    {
        name: "will-smith",
        occupation:"dance",
        catchPhrase: "hello there"
    },
    {
        name: "Leonardo Dicaprio",
        occupation: "make money",
        catchPhrase: "waouh waouh"
    },
    {
        name: "guillaume Amg",
        occupation: "Geek",
        catchPhrase: "Wax On, Wax off"
    },
];
const demoMovie= [
    {
        title: "will-smith",
        genre:"dance",
        plot: "hello there"
    },
    {
        title: "will-smith",
        genre:"dance",
        plot: "hello there"
    },
    
    {
        title: "will-smith",
        genre:"dance",
        plot: "hello there"   
    },

]
movieModel.create(demoMovie)
.then(dbres => console.log(dbres))
.catch(dberr => console.log(dberr));

celebrityModel.create(demoCelebrity)
.then(dbres => console.log(dbres))
.catch(dberr => console.error(dberr))
require("dotenv").config();
require("./../app.js");
const celebrityModel = require("./../models/celebrity");

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
celebrityModel.create(demoCelebrity)
.then(dbres => console.log(dbres))
.catch(dberr => console.error(dberr))
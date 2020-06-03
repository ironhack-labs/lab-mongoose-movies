const mongoose = require('mongoose');
const Celeb = require("../models/celebrity");
const MONGODB_URI = 'mongodb://localhost:27017/celebDB';


const celebList = [
    {
        name: "Peris Hilton",
        occupation: "Actor",
        catchPhrase: "That is hot!"
    },
    {
        name: "Jack Sparrow",
        occupation: "Pirate",
        catchPhrase: "Captain Jack Sparrow!"
    },
    {
        name: "Robin",
        occupation: "Personal Assistant",
        catchPhrase: "WTF Batman?!"
    }
];


mongoose
    .connect(MONGODB_URI,
    { useNewUrlParser: true ,
     useUnifiedTopology: true }
    )
    .then((self) => {
        console.log(`Connected to the database: "${self.connection.name}"`);
        return self.connection.dropDatabase();
        })
        .then(() => {
            Celeb.create(celebList)
            .then(result => {result.forEach(element => {
                console.log(`Celeb list created with : ${element.name}`);
            })})
            .catch(err => console.log("ERROR CREATING CELEB LIST : ", err));
        })
    .catch(err => console.log("Error connecting mongoDB"));

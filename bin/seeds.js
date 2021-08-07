const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity.model')

mongoose.connect('mongodb://localhost/lab-express-celebrities', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const celebrities = [
    {   name: "Angela",
        occupation: "chief",
        catchPhrase: "Wir schaffen das"},
     {
        name: "Trump",
        occupation: "Head of TV",
        catchPhrase: "You're fired"},
    {
        name: "Putin",
        occupation: "Secret Service Manager",
        catchPhrase: "Next Question"}
]

Celebrity.create(celebrities)
.then((celebsFromDB) => {
    console.log(`Created ${celebsFromDB.length} celebs`)
})
.catch((err) => {
    console.log('error with seed', err)
});
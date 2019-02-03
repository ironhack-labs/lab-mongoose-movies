const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')

const dbName = 'celebrity-project';
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [
    {
        name: "Beyonce",
        occupation: "Singer",
        catchPhrase: "Power means happiness; power means hard work and sacrifice"
    },
    {
        name: "Lady Gaga",
        occupation: "Singer",
        catchPhrase: "Don't you ever let a soul in the world tell you that you can't be exactly who you are."
    },
    {
        name: "Edward Norton",
        occupation: "Actor",
        catchPhrase: "I don't smoke and I don't want to smoke."
    }
]

Celebrity.create(celebrities, (err) => {
    if (err) {throw(err)}
    mongoose.connection.close();
});
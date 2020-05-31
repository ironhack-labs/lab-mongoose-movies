const mongoose = require('mongoose');
const Celebrities = require('../models/celebrity');


mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});





const celebrities = [{
    name: "Lady Gaga",
    occupation: "Singer",
    catchPhrase: "Some women choose to follow men, and some women choose to follow their dreams. If you're wondering which way to go, remember that your career will never wake up and tell you that it doesn't love you anymore.",
}, {
    name: "Bad Gyal",
    occupation: "Singer",
    catchPhrase: "He vuelto zorras",
}, {
    name: "Adam Brody",
    occupation: "Actor",
    catchPhrase: "I'm a fake intellectual",
}]


Celebrities.create(celebrities, err => {
    if (err) {
        throw err;
    }
    console.log(`Created ${celebrities.length} `);
});
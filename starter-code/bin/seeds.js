const mongoose = require('mongoose');
const Celebrity= require('../models/celebrity');
mongoose.connect(`mongodb://localhost/celebrities`)
const celebrities =
    [
        {
            name: "James Bond",
            occupation: "Spy",
            catchPhrase: "The name is Bond, James Bond",
        },
        {
            name: "Sheldon Cooper",
            occupation: "Theoretical physicis",
            catchPhrase: "Bazinga!",
        },
        {
            name: "Joey Tribbiani",
            occupation: "Actor",
            catchPhrase: "How you doin'?",
        },
    ];
    Celebrity.create(celebrities)
    .then(() => console.log('Celebs created on DB'))
    .then(() => mongoose.disconnect());
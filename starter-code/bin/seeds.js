
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/myCelebrity');

const Celebrity = require('../models/celebrity');

const celebrities = [
    {
        name: 'Sheng',
        ocupation: 'Business',
        catchPhrase: 'Make money or die'
    },

    {
        name: 'Linda',
        ocupation: 'Student',
        catchPhrase: 'Go vegan or die'
    },

    {
        name: 'Andre',
        ocupation: 'Teacher',
        catchPhrase: 'Learn or die'
    }
]


Celebrity.create(celebrities, (err, savedCelebrities) => {
    if (err) {
        throw Error;
        console.log('err: err');
    }

    savedCelebrities.forEach((theCelebrity) => {
        console.log(`${theCelebrity.name} - ${theCelebrity._id}`);
    });
    mongoose.disconnect();
});

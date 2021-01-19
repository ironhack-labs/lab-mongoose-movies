const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const celebrities = [
    { name: 'George Kusunoki Miller', occupation: 'Singer-songwriter', catchPhrase: 'SLOW DANCING IN THE DARK' },
    { name: 'Serj Tankian', occupation: 'Musician-singer', catchPhrase: 'Life is that perfect fine line between ironies' },
    { name: 'Daft Punk', occupation: 'Musician', catchPhrase: 'Electronic music right now is in its comfort zone, and it’s not moving one inch, That’s not what artists are supposed to do' }
];


Celebrity.create(celebrities).then(celebrities => {
        console.log(celebrities.length + ' celebrities created!');
        if (celebrities) {
            mongoose.connection.close();
        }
    })
    .catch(err => {
        console.log(err);
    });
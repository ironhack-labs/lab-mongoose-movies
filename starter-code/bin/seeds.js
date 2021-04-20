const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
require("../app")

const celebrity = [
    { name: 'Sheldon Cooper', occupation:'singer', catchPhrase: 'Bazinga' },
    { name: 'Homer Simpson', occupation: 'actor', catchPhrase: "D'oh!"},
    { name: 'Pablo Picasso', occupation: 'painter', catchPhrase: 'Painting is just another way of keeping a diary' }
  ];


Celebrity.create(celebrity)
    .then(celebrityFromDB => {
        console.log(`created ${celebrityFromDB.length} celebrity`);
        mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating celebrity from DB: ${err}`));
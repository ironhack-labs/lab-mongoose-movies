const mongoose = require('mongoose');
const data = require('../data.js');
const Celebrity = require('../models/celebrity.js');


mongoose.connect('mongodb://localhost/mongoose-celeb', { useNewUrlParser: true })
// .then(() => {
//     return Celebrity.collection.drop();
// })
.then(() => {
    return Celebrity.insertMany(data);
})
.catch(e => {
    console.log(e);
})
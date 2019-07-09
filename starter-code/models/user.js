const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema ({

    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    favMovies: [{type:Schema.Types.ObjectId, ref: 'Movie'}],
    favCelebs: [{type:Schema.Types.ObjectId, ref: 'Celebrity'}]


})


const User = mongoose.model('User', userSchema);



module.exports = User;
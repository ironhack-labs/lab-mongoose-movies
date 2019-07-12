const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema ({

    username: {type: String, unique: true},
    password: {type: String, },
    googleID : String,
    favMovies: [{type:Schema.Types.ObjectId, ref: 'Movie'}],
    favCelebs: [{type:Schema.Types.ObjectId, ref: 'Celebrity'}],
    email: String


})


const User = mongoose.model('User', userSchema);



module.exports = User;
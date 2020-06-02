const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebritySchema = new Schema(
    {
        name: String,
        occupation: String,
        catchPhrase: String,
        photoUrl: {
            type: String,
            default: 'https://www.pinclipart.com/picdir/big/4-44042_neben-seiner-groen-sorge-um-die-bambini-feuerwehren.png'
        }
    }
);

const Celebrity = mongoose.model('Celebrity', CelebritySchema);

module.exports = Celebrity;
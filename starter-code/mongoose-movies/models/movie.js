// REQUIRING IN MONGOOSE FOR ITS METHODS.

const mongoose      = require('mongoose');

// CREATING A VAR TO REFER TO THE MONGOOSE ** CLASS ** "SCHEMA".

const Schema        = mongoose.Schema;

// DEFINING MOVIESCHEMA AS A NEW SCHEMA ( ** CLASS ** WITHIN MONGOOSE -- NOT METHOD).
// YOU'RE TELLING THE DB TO EXPECT THESE KINDS OF FILES EVERY TIME A 'MOVIE' CONSTRUCTOR
// IS CALLED VIA MOVIE.FIND(), MOVIE.FINDBYID(), MOVIE.FINDBYIDANDUPDATE(), ETC.

const movieSchema   = new Schema({

    title:          String,
    genre:          String,
    plot:           String,
    poster:         String,
    celebrities:    [{type: Schema.Types.ObjectId, ref: 'Celeb'}]

});

// READ: 'MOVIE' IS A NEW MONGOOSE MODEL (MODEL IS A METHOD OF MONGOOSE), WHICH SHOULD
// CREATE A COLLECTION CALLED "MOVIES" (MONGO WILL TURN COLLECTION INTO LOWER-CASE
// PLURALIZED FORM, AND USING THE SCHEMA DEFINED ABOVE AS MOVIESCHEMA.

const Movie         = mongoose.model('Movie', movieSchema);

// MAKES THE MOVIE CONSTRUCTOR CLASS AVAILABLE TO REST OF APP.

module.exports      = Movie;
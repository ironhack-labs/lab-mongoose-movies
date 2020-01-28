const withDbConnection = require("../withDbConnection")
const Celebrity = require ("../models/Celebrity")
const mongoose = require('mongoose');
require('dotenv').config()
const dbName = "starter-code";
mongoose.connect(`mongodb://localhost/${dbName}`,{useNewUrlParser: true, useUnifiedTopology: true});

const celebrities = [
    {
        name: "", occupation: "", catchPhrase:""
    },
    {
        name: "", occupation: "", catchPhrase:""
    },
    {
        name: "", occupation: "", catchPhrase:""
    }
]
withDbConnection(async() => {
    await Celebrity.collection.drop();
    await Celebrity.create(celebrities);
})
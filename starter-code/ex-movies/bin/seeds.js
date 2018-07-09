require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = process.env.DBURL;
mongoose.connect(dbName);

const celebrities=[{name:"the rock",occupation:"Destroy things",catchPhrase:"hey hey"},
{name:"Leticia Sabater",occupation:"Famous singer all aroun the world",catchPhrase:"Comete las salchipapas"},
{name:"David Broncano",occupation:"TV host",catchPhrase:"Pero que ha pachadoo"}];

Celebrity.collection.drop();

Celebrity.create(celebrities)
.then( () => {
  mongoose.disconnect();
});
require("dotenv").config();

const mongoose = require('mongoose')
mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebritiesSeed = [
	{
		name: 'Brad Pitt',
		occupation: 'Actor',
		catchPhrase: 'The things you own end up owning you'
	},
	{
		name: 'Lady Gaga',
		occupation: 'Singer',
		catchPhrase: 'Rah-Rah-Ah-Ah-Ah, Roma-Roma-Ma-Ma, Gaga, Ooh-La-La'
	},
	{
		name: 'Alba Flores',
		occupation: 'Actor',
		catchPhrase: '¡Empieza el matriarcado!'
	}
]

const CelebrityModel = require('../models/Celebrity')

async function seed() {
	try {
		const dbRes = await CelebrityModel.insertMany(celebritiesSeed)
		console.log(dbRes)
	} catch (dbErr) {
		console.error(dbErr)
	}	
}

seed()
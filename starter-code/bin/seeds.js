const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = "celeb-database";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Paul Mcartney",
    occupation: "ex-beatle",
    catchPhrase: "All you need is love,.... la, la, la, laLA!"
	},
	{
    name: "MegaMind",
    occupation: "fictional character",
    catchPhrase: "Hark, something, something, dreamworks dialog!"
	},
	{
    name: "O mendigo que grita de madrugada na minha rua",
    occupation: "sofrer e gritar sobre isso",
    catchPhrase: "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH--ah-AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"
  },
];

Celebrity.create(celebrities, (err) => {
	if (err) {throw(err) }
	console.log(`Created ${celebrities.length} celebrities!`);
	mongoose.connection.close();
})

const movies = [
  {
		title: 'The royal tenenbaums',
		director: 'Wes Anderson',
		stars: ['Ben Stiller', 'Gwyneth Paltrow', 'Owen Wilson'],
    genre: 'comedy',
    description: 'Three grown prodigies, all with a unique genius of some kind, and their mother are staying at the family household. Their father, Royal had left them long ago, and comes back to make things right with his family.',
    spoliers: 'The father dies at the end.'
	},
	{
		title: 'O maravilhoso mundo de Edith Mern',
		director: 'Sams SanSun Li',
		stars: [],
    genre: 'drama',
    description: 'A dramedy about the life of Edith Mern, a well meaning HR employee that by a series of misteps while trying to get fired from the evil corporation she works at ends up climbing the ranks and contributing to the creation a dystopic society where people are born, live and die and are owned by skyscrapers from said eveil corp.',
    spoliers: 'The charming animal mascot "Mrs Cutties" that stole the viwers heart\'s looks like a mutt dog but it\'s actually the bio product of bio experimentation of chimerism between a south-african bubble bee and a malasian brown bear by the director\'s prodige daughter.'
	},
	{
		title: 'Oh God why are the snack so expensive',
		director: 'Ratinho the second',
		stars: ['Oprah', 'Oprah\'s loyal dog', 'Gail(Oprahs bff)', 'Oprahs overly impressionable audience', 'A well timed surprise gift to the audience', 'And you get a Tesla', 'and you and you', 'everyone get\'s Teslas', 'ft. Elon Musk goth girlfriend'],
    genre: 'romance',
    description: 'That episode where the crew tries to buy peanuts but they cost 10 bucks',
    spoliers: 'It\'s actually just 5 minutes of It\'s Always Sunny in Philadelphia followed by a 1h30 Oprah come back special sponsored by Space X, also, choice is an ilusion and nothing really matters because we are doomed to perish.',
	},
];

Movie.create(movies, (err) => {
	if (err) {throw(err) }
	console.log(`Created ${movies.length} movies!`);
	mongoose.connection.close();
})

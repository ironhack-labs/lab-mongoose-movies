const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const c_data = [
  {
    name : 'Dwayne "The Rock" Johnson',
    occupation: "Professional wrestler, actor",
    catchPhrase: "The Rock will lay the smackdown on your candy ass!"
  },
  {
    name : "Denzel Washington",
    occupation: "Actor, Motivational Speaker",
    catchPhrase: "King Kong ain't got shit on me!"
  },
  {
    name : "Barack Obama",
    occupation: "President of the United States of America, Motivational Speaker, Author, Orator",
    catchPhrase: "Yes we can!"
  }
];


const m_data = [{
		title: 'Inception',
		genre: 'Sci-fi',
		plot: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.`
	},
	{
		title: 'The Intern',
		genre: 'Comedy',
		plot: `A retired 70-year-old widower, Ben (played by Robert De Niro), is bored with retired life. He applies to a be a senior intern at an online fashion retailer and gets the position. The founder of the company is Jules Ostin (Anne Hathaway), a tireless, driven, demanding, dynamic workaholic. Ben is made her intern, but this is a nominal role - she doesn't intend to give him work and it is just window dressing. However, Ben proves to be quite useful and, more than that, a source of support and wisdom`
	},
	{
		title: 'The Devil wears Prada',
		genre: 'Comedy',
		plot: `A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.`
	},
	{
		title: 'We Need to Talk About Kevin',
		genre: 'Drama',
		plot: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`
	},
	{
		title: 'Amar te duele',
		genre: 'Drama',
		plot: `Renata is a young high-class girl and Ulises is a poor guy. They both fall in love, but they must fight against everyone, specially Renata's rich parents, who want to stop their love by sending her to Canada. The story remarks the difference between social classes in Mexico City, and their characters risk everything just to save their love.`
	},
	{
		title: 'Y tu mamá también',
		genre: 'Drama',
		plot: `In Mexico, two teenage boys and an attractive older woman embark on a road trip and learn a thing or two about life, friendship, sex, and each other.`
	},
	{
		title: 'The Shape of Water',
		genre: 'Romance',
		plot: `At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.`
	},
	{
		title: 'The Reader',
		genre: 'Drama',
		plot: `Post-WWII Germany: Nearly a decade after his affair with an older woman came to a mysterious end, law student Michael Berg re-encounters his former lover as she defends herself in a war-crime trial.`
	}

];

mongoose
	.connect('mongodb://localhost/movies-celebrities', {
		useNewUrlParser: true
	})
	.then(async () => {
    const celebrity = await Celebrity.create(c_data)
    console.log(`${celebrity.length} celebrities created.`);
		const movies = await Movie.create(m_data);
		console.log(`${movies.length} Movies created at movies-celebrities`);
		mongoose.connection.close();
	})
	.catch((err) => {
		console.log(err);
	});
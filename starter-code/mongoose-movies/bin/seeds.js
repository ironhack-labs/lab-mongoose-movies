
const celebrityData = [
  {
    name : 'Tom Cruise',
    occupation : 'Actor & Producer',
    catchPhrase : 'When you have to cope with a lot of problems, you\'re either going to sink or you\'re going to swim.'
  },
  {
    name : 'Clint Eastwood',
    occupation : 'Actor, Director, Producer',
    catchPhrase : 'You should never give up your inner self. / If you want a guarantee, buy a toaster.'
  },
  {
    name : 'Arnold Schwarzenegger',
    occupation : 'Actor, filmmaker, businessman, investor, author, philanthropist, activist, politician, and former professional bodybuilder',
    catchPhrase : 'Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.'
  },
  {
    name : 'Meryl Streep',
    occupation : 'Actress',
    catchPhrase : 'Everything we say signifies; everything counts, that we put out into the world. It impacts on kids, it impacts on the zeitgeist of the time.'
  },
];

const movieData = [
  {
    title : "Conan the Barbarian",
    genre : "Adventure, Fantasy",
    plot: "A barbarian warrior sets off to avenge his parents and his tribe whom were slain by an evil sorcerer and his henchmen when he was a boy.",
  },
  {
    title : "The Terminator",
    genre : "Action, Sci-Fi",
    plot: "A seemingly indestructible android is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.",
  },
  {
    title : "Terminator 2: Judgment Day",
    genre : "Action, Sci-Fi",
    plot: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
  },
  {
    title : "True Lies",
    genre : "Action, Comedy, Thriller",
    plot: "A fearless, globe-trotting, terrorist-battling secret agent has his life turned upside down when he discovers his wife might be having an affair with a used car salesman while terrorists smuggle nuclear war heads into the United States.",
  },
  {
    title : "The Bridges of Madison County",
    genre : "Drama, Romance",
    plot: "Photographer Robert Kincaid wanders into the life of housewife Francesca Johnson, for four days in the 1960s.",
  },
  {
    title : "The Devil Wears Prada",
    genre : "Comedy, Drama",
    plot: "A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.",
  },
  {
    title : "Doubt",
    genre : "Drama, Mystery",
    plot: "A Catholic school principal questions a priest's ambiguous relationship with a troubled young student.",
  },
  {
    title : "The Iron Lady",
    genre : "Biography, Drama",
    plot: "An elderly Margaret Thatcher talks to the imagined presence of her recently deceased husband as she struggles to come to terms with his death while scenes from her past life, from girlhood to British prime minister, intervene.",
  },
  {
    title : "The Post",
    genre : "Biography, Drama, History",
    plot: "A cover-up that spanned four U.S. Presidents pushed the country's first female newspaper publisher and a hard-driving editor to join an unprecedented battle between the press and the government.",
  },
  {
    title : "The Good, the Bad and the Ugly",
    genre : "Western",
    plot: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
  },
  {
    title : "Dirty Harry",
    genre : "Action, Crime, Thriller",
    plot: "When a mad man calling himself 'the Scorpio Killer' menaces the city, tough as nails San Francisco Police Inspector Harry Callahan is assigned to track down and ferret out the crazed psychopath.",
  },
  {
    title : "Escape from Alcatraz",
    genre : "Biography, Crime, Drama",
    plot: "Alcatraz is the most secure prison of its time. It is believed that no one can ever escape from it, until three daring men make a possible successful attempt at escaping from one of the most infamous prisons in the world.",
  },
  {
    title : "Million Dollar Baby",
    genre : "Drama, Sport",
    plot: "A determined woman works with a hardened boxing trainer to become a professional.",
  },
  {
    title : "Gran Torino",
    genre : "Drama",
    plot: "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.",
  },
  {
    title : "Top Gun",
    genre : "Action, Drama, Romance",
    plot: "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
  },
  {
    title : "Mission: Impossible",
    genre : "Action, Adventure, Thriller",
    plot: "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.",
  },
  {
    title : "Minority Report",
    genre : "Action, Adventure, Crime",
    plot: "In a future where a special police unit is able to arrest murderers before they commit their crimes, an officer from that unit is himself accused of a future murder.",
  },
  {
    title : "Valkyrie",
    genre : "Drama, History, Thriller",
    plot: "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
  },
  {
    title : "Oblivion",
    genre : "Action, Adventure, Mystery",
    plot: "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself.",
  },
  {
    title : "Edge of Tomorrow",
    genre : "Action, Adventure, Sci-Fi",
    plot: "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
  },
  
];

const mongoose = require("mongoose");
const dbname = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbname}`);

const celebrityCollection = require('../models/celebrity');
celebrityCollection.collection.drop();

celebrityCollection.create(celebrityData, (err) => {
  if(err){throw err;}
  console.log("Connection Success");
  mongoose.connection.close();
});

const movieCollection = require('../models/movie');
movieCollection.collection.drop();

movieCollection.create(movieData, (err) => {
  if(err){throw err;}
  console.log("Connection Success");
  mongoose.connection.close();
});


module.exports = celebrityCollection;

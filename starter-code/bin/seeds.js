require('dotenv') .config() 

const mongoose = require('mongoose');
const Celebrity = require('..models/Celebrity');
const Movie = require('..models/Movie');



//CELEBRITIES
const celebrities = [ 
{ 
  name: 'Soma Yikihira',
  occupation: 'chef',
  catchPhrase: 'Osomatsu! - Happy to serve!'
},{
  name: 'Monkey D Luffy',
  occupation: 'Pirate',
  catchPhrase: 'Kaizoku ore wa naru - I will be the Pirate King'
},{ 
  name: 'Natsu Dragneel',
  occupation: 'FairyTail magician',
  catchPhrase:'Moete kita zo - Im all fired up!'
}
];

Celebrity.create(celebrities)
  .then(celebrities=>{
    console.log(`Created ${celebrities.length} celebrities successfully`);
    mongoose.connection.close()
  })
  .catch(err=>{
    console.log(err)
  })

//MOVIES  
const movies = [
  {
    title: 'Shokugeki no Soma',
    genre: 'ecchi action',
    plot: 'Shokugeki no Soma centers on Yukihira Soma, a middle school student who is determined to surpass his father’s culinary skills. One day, his father decides to close down their family restaurant and hone his skills in Europe. Before leaving he enrolls Soma in an elite culinary school that is extremely difficult to enter with a graduation rate of only 10 percent. Will Soma be able to improve his skills, or will the kitchen prove to be too hot?'
  },{
    title: 'One Piece',
    genre: 'Shounen action',
    plot: 'Monkey. D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who will never give up until he is claimed the greatest treasure on Earth: the Legendary One Piece!'
  },{
    title: 'Fairy Tail',
    genre: 'fantasy action',
    plot: 'The story follows a teenage girl named Lucy Heartfilla who is determined to join the notorious magical Fairy Tail Guild. During a daring rescue, she encounters Natsu who is part of the guild and eventually offers her a place. They become teammates performing various missions for the Fairy Tail Guild. Be prepared for an action-packed adventure!'
  }
];

Movie.create(movies)
  .then(movies => {
    console.log(`Nice! You've created ${movies.length} new movies.`)
    mongoose.connection.close()
  })
  .catch(err => console.log(err)) 

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(x => console.log(`Connected to "${x.connections[0].name}".`))
  .catch(err => console.error('Error connecting to mongo', err));

Promise.all([Celebrity.create(celebrities), Movie.create(movies)])
  .then(([celebrities, movies]) => {
    console.log(`Success: ${celebrities.length} celebreties were created.`);
    console.log(`Success: ${movies.length} movies were created.`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`Error while populating database.`, err));
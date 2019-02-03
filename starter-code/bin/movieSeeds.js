const mongoose = require('mongoose');
const movieSchema = require('../models/movie');

mongoose
  .connect('mongodb://localhost/myDataBase', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

const movies = [
  {
    title: 'Inception',
    genre: 'Thriller',
    plot:
      "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible - inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming."
  },
  {
    title: 'Mr.Nobody',
    genre: 'Fantasy',
    plot:
      'In the year 2092, one hundred eighteen year old Nemo is recounting his life story to a reporter. He is less than clear, often times thinking that he is only thirty-four years of age. But his story becomes more confusing after he does focus on the fact of his current real age. He tells of his life at three primary points in his life: at age nine (when his parents divorced), age sixteen and age thirty-four. The confusing aspect of the story is that he tells of alternate life paths, often changing course with the flick of a decision at each of those ages. One life path has him ultimately married to Elise, a depressed woman who never got over the unrequited love she had for a guy named Stefano when she was a teenager and who asked Nemo to swear that when she died he would sprinkle her ashes on Mars. A second life path has him married to Jean. Their life is one of luxury but one also of utter boredom. And a third life path has him in a torrid romance with his step-sister Anna, the two who, as adults, would search for each other after having been torn apart as teenagers. These life paths also intersect, with the three women sometimes entering the alternate life in some other aspect. Are any of these lives real or are they all a figment of his imagination?'
  },
  {
    title: 'Memento',
    genre: 'Thriller',
    plot: `Leonard Shelby has short term memory loss resulting from an injury he sustained which was associated with the murder of his wife. He remembers his life prior to the incident, such as being an insurance claims investigator. He has learned to cope with his memory loss through dealing with a man named Sammy Jankis, a person he investigated professionally who also had short term memory issues. Some of these coping mechanism are to have a system of where to place things, talk to people face-to-face if possible rather than on the telephone as to be able to gauge their true intention, take Polaroids and write copious notes, the most important of those which he tattoos on his body so that they become permanent. Leonard's current mission is to find and kill his wife's murderer, who he believes is a man named John G., a name which is tattooed on his body. Over the course of a day, Leonard is assisted in this mission by a few people seemingly independent of each other, including a man named Teddy and a woman named Natalie. However, each time he meets them, he has no idea who they are, why they are helping him and if indeed they are working toward the same goal as him.`
  }
];

movieSchema
  .insertMany(movies)
  .then(() => {
    console.log('Import Sucessful');
    mongoose
      .disconnect()
      .then(() => {
        console.log(`Discconected to Mongo!`);
      })
      .catch(err => {
        console.error('Error disconnecting to mongo', err);
      });
  })
  .catch(err => console.log('An error has ocurred: ', err));

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

const dbName = "deViernes";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
    name: "Audrey Hepburn",
    occupation: "Actress",
    catchPhrase: "People, even more than things, have to be restored, renewed, revived, reclaimed, and redeemed; never throw out anyone.",
    },
    {
    name: "Walter Riso",
    occupation: "Psychologist",
    catchPhrase: "No debes cometer el mismo error dos veces, la segunda vez que lo haces, ya no es tu error, es tu opción.",
    },
    {
    name: "Laura Pausini",
    occupation: "Singer",
    catchPhrase: "Y nadie ha dicho que me faltes siempre.",
    }
];

const movies = [
  {
  title: "Breakfast at Tiffany's",
  genre: "Romantic Comedy",
  plot: "Holly Golightly lives in a brownstone on Manhattan's swank East Side. Totally madcap, she has a partially furnished apartment, owns a cat with no name, gets rid of the mean reds by visiting Tiffany's, and is forever misplacing her door key, much to the dismay of her upstairs neighbor Mr. Yunioshi, a Japanese photographer. Holly makes her living in two ways: she receive $50 from her gentlemen escorts whenever she needs powder room money, and she is paid $100 for each weekly trip she makes to Sing Sing, where she visits Sally Tomato, an ex-mobster. One day Paul Varjak, a young writer who is supported by an older woman nicknamed 2E, comes into Holly's life. Following one of Holly's wild cocktail parties, Paul unexpectedly meets Doc Golightly, a gentle Texan whom Holly married when she was only 15 years old. Holly explains to Paul that the marriage was annulled long ago, and he helps her send the heartbroken Doc away. After a day on the town together, Paul realizes that he is in love with Holly and proposes to her; but she is determined to marry José, a South American millionaire. However, when it is publicly revealed that Holly has been innocently carrying narcotics ring information from Sally Tomato to his New York associates, the stuffy José abandons her. Furious at everything and everyone, Holly throws Cat into the rain and decides to leave town, but Paul lectures her and then goes out to find Cat. Holly realizes how much she is giving up and races through the wet streets to a happy reunion with Paul and Cat.",
  },
  {
  title: "13 Going on 30",
  genre: "Romantic Comedy",
  plot: "ennifer Garner and Mark Ruffalo (Eternal Sunshine of the Spotless Mind) star in this hilarious flash-forward romance about a pre-teen girl who goes from geek to glamorous. With the help of some magic wishing dust, 13 year-old Jenna Rink (Garner) becomes 30 and gorgeous overnight, with everything she ever wanted, except for her best friend Matt (Ruffalo). Now, this grown woman must create some magic of her own to help the little girl inside find the true love she left behind.",
  },
  {
  title: "The help",
  genre: "Drama",
  plot: "The Help is a safe film about a volatile subject. Presenting itself as the story of how African-American maids in the South viewed their employers during Jim Crow days, it is equally the story of how they empowered a young white woman to write a best-seller about them, and how that book transformed the author's mother. We are happy for the two white women, and a third, but as the film ends it is still Jackson, Mississippi and Ross Barnett is still governor. Still, this is a good film, involving and wonderfully acted. I was drawn into the characters and quite moved, even though all the while I was aware it was a feel-good fable, a story that deals with pain but doesn't care to be that painful. We don't always go to the movies for searing truth, but more often for reassurance: Yes, racism is vile and cruel, but hey, not all white people are bad.",
  },
];

Celebrity.create(celebrities)
  .then(celebrities =>{
    mongoose.connection.close();
    console.log(`Created ${celebrities.length} celebrities`);
    })
  .catch(e=>{throw (e)});

  Movie.create(movies)
  .then(movies =>{
    mongoose.connection.close();
    console.log(`Created ${movies.length} movies`);
    })
  .catch(e=>{throw (e)});
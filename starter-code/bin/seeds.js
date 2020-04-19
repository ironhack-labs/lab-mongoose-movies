const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity.model');

const dbtitle = 'starter-code'; //esta base de datos se tiene que llamar igual que la de app js
mongoose.connect(`mongodb://localhost/${dbtitle}`);

Celebrity.collection.drop();
const celebrities = [

    {
        name: "Ricky Gervais",
        occupation: "Comedian",
        catchPhrase: "It's like a superpower. Or is it?"
    },
    {
        name: "Jim Parsons",
        occupation: "Actor",
        catchPhrase: "Bazzinga"
    },
    {
        name: "Iliza Shlesinger",
        occupation: "Comedian",
        catchPhrase: "Party Goblin"
    }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  mongoose.connection.close();
});

//----------------------------------------------------------------

const Movie = require('../models/movie.model');
Movie.collection.drop();

const movies = [

    {
        title: "BIG TIME ADOLESCENCE",
        genre: "Comedy, Drama",
        plot: "A seemingly bright and mostly innocent 16-year-old named Mo (Griffin Gluck) attempts to navigate high school under the guidance of his best friend Zeke (Pete Davidson), an unmotivated-yet-charismatic college dropout. Although Zeke genuinely cares about Mo, things start to go awry as he teaches nontraditional life lessons in drug dealing, partying, and dating, while Mo's well-meaning dad (Jon Cryer) tries to step in and take back the reins of his son's upbringing."
    },
    {
        title: "BLOODSHOT",
        genre: "Action & Adventure, Science Fiction & Fantasy",
        plot: "Based on the bestselling comic book, Vin Diesel stars as Ray Garrison, a soldier recently killed in action and brought back to life as the superhero Bloodshot by the RST corporation. With an army of nanotechnology in his veins, he's an unstoppable force -- stronger than ever and able to heal instantly. But in controlling his body, the company has sway over his mind and memories, too. Now, Ray doesn't know what's real and what's not -- but he's on a mission to find out."
    },
    {
        name: "THE CONVERSATION",
        genre: "Drama, Mystery & Suspense",
        plot: "Made between The Godfather (1972) and The Godfather Part II (1974), and in part a homage to Michelangelo Antonioni's art-movie classic Blow-Up (1966), The Conversation was a return to small-scale art films for Francis Ford Coppola. Sound surveillance expert Harry Caul (Gene Hackman) is hired to track a young couple (Cindy Williams and Frederic Forrest), taping their conversation as they walk through San Francisco's crowded Union Square. Knowing full well how technology can invade privacy, Harry obsessively keeps to himself, separating business from his personal life, even refusing to discuss what he does or where he lives with his girlfriend, Amy (Teri Garr). Harry's work starts to trouble him, however, as he comes to believe that the conversation he pieced together reveals a plot by the mysterious corporate Director who hired him to murder the couple. After he allows himself to be seduced by a call girl, who then steals the tapes, Harry is all the more convinced that a killing will occur, and he can no longer separate his job from his conscience. Coppola, cinematographer Bill Butler, and Oscar-nominated sound editor Walter Murch convey the narrative through Harry's aural and visual experience, beginning with the slow opening zoom of Union Square accompanied by the alternately muddled and clear sound of the couple's conversation caught by Harry's microphones. The Godfather Part II and The Conversation earned Coppola a rare pair of Oscar nominations for Best Picture, as well as two nominations for Best Screenplay (The Godfather Part II won both). Praised by critics, The Conversation was not a popular hit, but it has since come to be seen as one of the artistic high points of the decade, as well as of Coppola's career. Its atmosphere of paranoia and suspicion, combined with its obsessive loner antihero, made it prototypical of the darker American art movies of the early '70s, as its audiotape storyline also made it seem eerily appropriate for the era of the Watergate scandal."
    }
]

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  mongoose.connection.close();
});
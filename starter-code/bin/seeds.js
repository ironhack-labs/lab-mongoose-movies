const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

mongoose
  .connect('mongodb://localhost/starter-code', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongo'))
  .catch(err => console.error('Error connecting to mongo', err));

// const celebrities = [
//     {
//         name:"Roberto Assagioli",
//         occupation:"psychologist",
//         catchPhrase:"There's no certainty, there is only adventure!"
//     },

//     {
//         name:"Edith Piaf",
//         occupation:"singer",
//         catchPhrase:"Don't care what people say. Don't give a damn about their laws."
//     },

//     {
//         name:"Michael Kelland John Hutchence",
//         occupation:"singer",
//         catchPhrase:"Cause we all have wings.. But some of us don't know why."
//     }
// ];

// Celebrity.create(celebrities).then(celebrities => { 
//  console.log(`${celebrities.length} celebrities have been created!`) })
// mongoose.connection.close();
// .catch(err => { console.log('An error happened:', err)
// });


const movies = [
    {
        title:"Samsara",
        genre:"Action & Adventure",
        plot:"A spiritual love-story set in the majestic landscape of Ladakh, Himalayas. Samsara is a quest; one man's struggle to find spiritual Enlightenment by renouncing the world. And one woman's struggle to keep her enlightened love and life in the world. But their destiny turns, twists and comes to a surprise ending..."
    },

    {
        title:"Roma",
        genre:"Drama",
        plot:"Cleo is one of two domestic workers who help Antonio and Sofía take care of their four children in 1970s Mexico City. Complications soon arise when Antonio suddenly runs away with his mistress and Cleo finds out that she's pregnant. When Sofía decides to take the kids on vacation, she invites Cleo for a much-needed getaway to clear her mind and bond with the family."
    },
  
    {
        title:"‎What Dreams May Come",
        genre:"Science Fiction & Fantasy",
        plot:"After being killed in a car accident, Chris Nielsen finds himself in an unwanted paradise that is lacking only one thing - his wife. However, he soon learns that she has committed suicide, but souls who do such acts are sent to hell. Despite warnings, Chris ventures into the pits of Hell to save his wife."
    },
];

Movie.create(movies).then(mov => { console.log(`${mov.length} movies have been created!`) })
.catch(err => { console.log('An error happened:', err)
});
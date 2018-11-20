const mongoose = require('mongoose');
const Celeb = require('../models/Celebrity');
const Movie = require('../models/Movie');
// const User = require('..models/User');


// ^^^^ to create a Celeb we need the model created and named Celebridades
// conts ^^^Celeb is also mentionmed in the model/Celebridades file

const dbName = 'week4project';
// dbName es el nombre de la database in MONGO DB

mongoose.connect(`mongodb://localhost/${dbName}`);


// // Seeds for Movies collection
// const movies =[
//   {title: "Patty and the hotdog",
//   genre: "Drama",
//  plot: "The struggle for acceptance after loss and the journey within for a bun"
// },
// {title: "Your teeth are yellow",
//   genre: "Thriller",
//  plot: "Unsuspecting victims in a quiet town figth to survive the danger that lurks within"
// },
// {title: "War and war",
//   genre: "Comedy",
//  plot: "Two sisters, one pair of shoes, and a cat. Are they enough to help this new mom?"
// },
// {title: "Water",
//   genre: "Romantic Comedy",
//  plot: "She said, she did, no one is safe when it comes to her next target"
// },
// {title: "Que",
//   genre: "Historical Fiction",
//  plot: "An inuit conquering the sub-saharan terrain."
// }
// ]

// Movie.create(movies, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${movies.length} movies`)

// });



// // seeds from Celebrity collection.

// const celebrities =[{name: "Jimmy Fallon",
//   occupation: "Comedian",
//   catchPhrase: "S'mores are life",
//   image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiwkv_n0dTeAhWNrVkKHcN5CRcQjRx6BAgBEAU&url=http%3A%2F%2Fwww.revelist.com%2Fcelebrity%2F16-celebs-tinder-gifs%2F1040&psig=AOvVaw0yW4iq6BGxJLcTbKCRTb9-&ust=1542310837829026"
// },

// {name: "Jensen Ackles",
//   occupation: "Actor",
//   catchPhrase: "That's gotta hurt",
//   image:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj95dfT1NTeAhUN0FkKHUMTAdgQjRx6BAgBEAU&url=https%3A%2F%2Fwww.tumblr.com%2Ftagged%2Fhey-gifs&psig=AOvVaw3MX4f0WDtYs7kOABQ0k1Fw&ust=1542310912012909"
// },

// {name: "Will Ferrell",
//   occupation:"Actor",
//   catchPhrase: "That's not funny",
//   image:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiTwPWF09TeAhXFuVkKHREqCjIQjRx6BAgBEAU&url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fglass-case-emotion-3R0eEIZP0fANG&psig=AOvVaw3MX4f0WDtYs7kOABQ0k1Fw&ust=1542310912012909"
// },

// {name: "Jake Johnson",
//   occupation:"Actor",
//   catchPhrase: "I'll drink to that",
//   image:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjtse2m09TeAhWstVkKHfbbCnUQjRx6BAgBEAU&url=https%3A%2F%2Ftenor.com%2Fview%2Falcohol-newgirl-gif-5028584&psig=AOvVaw3MX4f0WDtYs7kOABQ0k1Fw&ust=1542310912012909"
// }

// ]

// // // variable Celeb was declared at begining of file. it holds the method to create the new celebrities
// // // celebrities is the name of the variable that holds the seed array
// Celeb.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)

// });


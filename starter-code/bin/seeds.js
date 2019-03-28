const mongoose = require("mongoose");
const Movie =require ("../models/Movie");
const Celebrity =require ("../models/Celebrity");


mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true});

const movies = [{title:"Scream",
    genre: "Horror",
    plot: 'High school student Casey Becker receives a flirty phone call from an unknown person, asking her, "Whats your favorite scary movie?" However, the caller turns sadistic and threatens her life. He reveals that her boyfriend Steve Orth is being held hostage and demands she answer questions about horror films. After Casey gets one wrong, Steve is murdered. When Casey refuses to answer more questions, she is murdered by a masked killer. Her parents come home to find her corpse hanging from a tree.'
        },
{title:"Sinister",
genre:"Horror",
plot:"True crime writer Ellison Oswalt moves into a home with his wife Tracy, their 12-year-old son Trevor, and their 7-year-old daughter Ashley. Ellison has moved his family (unbeknownst to them) into a home where a family was murdered, all hanged by ropes on a tree in the backyard. Ellison intends to use the case of the murdered family as the basis for his new book and hopes that his research will reveal the fate of the Stevenson family's fifth member, a 10-year-old girl named Stephanie who disappeared following the murders. Later that night Ellison discovers in a box a screaming, half-naked Trevor having a night terror."},
{title:"The Exorcist",
genre:"Horror",
plot:"Lankester Merrin, a veteran Catholic priest who performed an exorcism in the 1950s, is on an archaeological dig in the ancient city of Hatra in Iraq. There he finds an amulet that resembles a statue of Pazuzu, a demon of ancient origins with whose history Merrin is familiar."}];

  Movie.create(movies)
  .then(movies =>{
      console.log(`se crearon ${movies.length}  Peliculas`);
      mongoose.connection.close()
  })
  .catch(err =>{
      console.log(err);
  })

  const celebrities = [{name:"Nicole Kidman",occupation:"Actress",catchPhrase:"You don't have to be naked to be sexy."},
  {name:"Taylor Swift",occupation:"Singer",catchPhrase:"People haven't always been there for me but music always has."},
  {name:"Katy Perry",occupation:"Singer",catchPhrase:"I'm happy, I'm in a good place, I'm looking forward to my future."}];

  Celebrity.create(celebrities)
  .then(celebrities =>{
      console.log(`se crearon ${celebrities.length}  Estrellas`);
      mongoose.connection.close()
  })
  .catch(err =>{
      console.log(err);
  });
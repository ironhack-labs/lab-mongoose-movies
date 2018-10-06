// Llamando dependecias y modelo
const mongoose = require("mongoose");
const Celeb = require("../models/Celebrity");
const Movie = require("../models/Movie")

// conexion con la BD
const dbName = "celebrities-app";
mongoose.connect(
  `mongodb://localhost/${dbName}`,
  { useNewUrlParser: true }
);

//Matriz de objetos para la BD
const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "I feel passion to learn. I feel passion for life.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Tom_Cruis.jpg"
  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "Do not commit yourself to someone who does not compromise in the way you need it.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Formation_recorte.jpg/800px-Formation_recorte.jpg"
  },
  {
    name: "Nikola Tesla",
    occupation: "Inventor",
    catchPhrase: "I do not really care that they want to steal my ideas, I worry that they do not have them.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Tesla_Sarony.jpg/445px-Tesla_Sarony.jpg"
  }
];

//Creación de datos en la BD
Celeb.create(celebrities, (err) => {
  if (err) throw(err)
  console.log(`Created ${celebrities.length} celebrities`)
  
  // cerrar conexion a la BD
  mongoose.connection.close()
});

const pelis = [
  {
    title: "Guardians of the Galaxy",
    genre: "Superhero Film",
    plot: "In 1988, following his mother's death, a young Peter Quill is abducted from Earth by the Ravagers, a group of space pirates led by Yondu Udonta. Twenty-six years later on the planet Morag, Quill steals an orb but is attacked by Korath, a subordinate to the fanatical Kree, Ronan. Although Quill escapes with the orb, Yondu discovers his theft and issues a bounty for his capture, while Ronan sends the assassin Gamora after the orb.",
    image: "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/27409_medium.jpg"
  },
  {
    title: "Doctor Strange",
    genre: "Superhero Film",
    plot: "In Kathmandu, the sorcerer Kaecilius and his zealots enter the secret compound Kamar-Taj and behead its librarian. They steal a few pages from an ancient, mystical text belonging to the Ancient One, a long-lived sorcerer who has taught every student at Kamar-Taj, including Kaecilius, in the mystic arts. The Ancient One pursues the traitors, but Kaecilius and his followers escape.",
    image: "https://upload.wikimedia.org/wikipedia/vi/c/c7/Doctor_Strange_poster.jpg"
  },
  {
    title: "Iron Man",
    genre: "Superhero Film",
    plot: "Genius, billionaire, playboy and philanthropist Tony Stark, who has inherited the defense contractor Stark Industries from his father, is in war-torn Afghanistan with his friend and military liaison Lieutenant Colonel James Rhodes to demonstrate the new Jericho missile. After the demonstration, the convoy is ambushed and Stark is critically wounded by one of his own company's rocket-propelled grenades, used by the attackers.",
    image: "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/161320140525-uau-posters-filmes-homem-de-ferro--iron-man--2.jpg"
  }
]
 Movie.create(pelis, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${pelis.length} movies`)
  mongoose.connection.close()
}); 
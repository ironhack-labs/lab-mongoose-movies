const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

// const celebrities = [
//     {
//         name: 'Arnold Schwarzenegger',
//         occupation: 'actor',
//         catchPhrase: 'Hasta la vista baby', 
//     },
//     {
//         name: 'Lady Gaga',
//         occupation: 'singer',
//         catchPhrase: 'Gaga Uh Lala', 
//     },
//     {
//         name: 'Jim Carrey',
//         occupation: 'actor',
//         catchPhrase: 'Que Demais', 
//     },
// ];
const movies = [
    {
        title: 'Titanic',
        genre: 'drama',
        plot: `Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica jornada do Titanic, em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.`,
    },
    {
        title: 'Finding Nemo',
        genre: 'child',
        plot: `Em seu primeiro dia de aula, esquecendo os conselhos do pai superprotetor, Nemo é capturado por um mergulhador e acaba no aquário de um dentista. Enquanto Nemo tenta bolar um plano para escapar, seu pai cruza o oceano para resgatá-lo.`,
    },
    {
        title: "Jaws",
        genre: 'terror',
        plot: `Um terrível ataque a banhistas é o sinal de que a praia da pequena cidade de Amity, na Nova Inglaterra, virou refeitório de um gigantesco tubarão branco. O chefe de polícia Martin Brody quer fechar as praias, mas o prefeito Larry Vaughn não permite, com medo de que o faturamento com a receita dos turistas deixe a cidade sem recursos. O cientista Matt Hooper e o pescador Quint se oferecem para ajudar Brody a capturar e matar a fera, mas a missão vai ser mais complicada do que eles imaginavam.`,
    },
    {
        title: "Psico",
        genre: 'terror',
        plot: `Após roubar 40 mil dólares para se casar com o namorado, uma mulher foge durante uma tempestade e decide passar a noite em um hotel que encontra pelo caminho. Ela conhece o educado e nervoso proprietário do estabelecimento, Norman Bates, um jovem com um interesse em taxidermia e com uma relação conturbada com sua mãe. O que parece ser uma simples estadia no local se torna uma verdadeira noite de terror.`,
    },
];

mongoose
  .connect('mongodb://localhost/lab-movies-ironhack', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    // Celebrity.insertMany(celebrities)
    // .then(celebs =>  {
    //     console.log(`inserted ${celebs.length} celebrities`);

    //     mongoose.connection.close();
    // })
    // .catch(error => console.log(error));

    Movie.insertMany(movies)
    .then(mov =>  {
        console.log(`inserted ${mov.length} movies`);

        mongoose.connection.close();
    })
    .catch(error => console.log(error));    

  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });




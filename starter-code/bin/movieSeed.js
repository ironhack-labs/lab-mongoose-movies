require('dotenv').config()

const mongoose  = require('mongoose')
const Movie = require('../models/Movie')

mongoose.connect(process.env.DB)

const movies = [
  {title: "The Departed",genre:"Crime",plot:"An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",year:"2006",poster:"https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg"},
  {title: "Goodfellas",genre:"Crime",plot:"The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",year:"1990",poster:"https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX667_CR0,0,667,999_AL_.jpg"},
  {title: "Insidious",genre:"Horror",plot:"A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",year:"2010",poster:"https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"},
]

Movie.create(movies)
  .then(movies=>{
    console.log(`Created ${movies.length} movies successfully`);
    mongoose.connection.close()
  })
  .catch(err=>{
    console.log(err)
  })
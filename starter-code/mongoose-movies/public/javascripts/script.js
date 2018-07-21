
// POKEMON AXIOS STUFF

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

document.getElementById('poke-button').onclick = function(){

  axios.get(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(600)}/`)
  .then((thePokemon)=>{

      document.getElementById('poke-info').innerHTML = `<h1>${capitalizeFirstLetter(thePokemon.data.name)}</h1>`;
      document.getElementById('poke-photo').innerHTML = `<img src=${thePokemon.data.sprites.front_default}>`;
      
      // console.log(thePokemon);

  })
  .catch((err)=>{

      console.log(err);

});
};

// --------------------------------------------------------

// AXIOS POST STUFF

$('#list-button').click(function(){

  axios.get('https://ih-crud-api.herokuapp.com/characters')
  
    .then((response)=>{

      // console.log(response);

      response.data.forEach((oneCharacter)=>{

        const newChar = `
        
          <div>
          <h5>Name: ${oneCharacter.name}</h5>
          <p>Occupation: ${oneCharacter.occupation}
          <p>Weapon: ${oneCharacter.weapon}
          <p>Debt: ${oneCharacter.debt}
          </div>
          <hr>
          `;

        $('#characters-div').append(newChar);

      });
    })
    .catch((err)=>{

      console.log(err);
    
    });
});
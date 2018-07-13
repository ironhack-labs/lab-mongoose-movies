document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


document.getElementById('poke-button').onclick=function(){
  const theId=document.getElementById('poke-input').value;
  axios.get('https://pokeapi.co/api/v2/pokemon/'+theId)

  // axios.get('https://pokeapi.co/api/v2/pokemon/'+theId, {crossdomain: true})

  // .then((responseFromAPI)=>{
  //     document.getElementById('poke-info').innerHTML = responseFromAPI.data.name;
 .then((responseFromAPI)=>{
     console.log(responseFromAPI)
      document.getElementById('poke-info')
      .innerHTML = `
      <h3>${responseFromAPI.data.name}</h3>
      <img src=${responseFromAPI.data.sprites.front_default}>
      `

  })
  .catch((err)=>{
      console.log(err);
  })
  
}
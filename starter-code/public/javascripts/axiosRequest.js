
let display = document.getElementById('all-items');



//Axios

document.getElementById('fetch-all').onclick = function(){
  axios.get('https://localhost:3001/api/api')
  .then((result)=>{

    result.data.forEach((listings)=>{
      display.innerHTML += `
      <div class="character-info">
      <div class="name">${listings.name}</div>
      <div class="occupation">${listings.occupation}</div>
      <div class="cartoon">${listings.catchPhrase}</div>
    </div>`
    

      })
      })

  .catch((err)=>{
    console.log(err);
})
}
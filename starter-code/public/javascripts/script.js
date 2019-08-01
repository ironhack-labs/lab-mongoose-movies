
let display = document.getElementById('all-items');
const cname = document.getElementById('cname');
const occ = document.getElementById('occ');
const phrase = document.getElementById('phrase');
const passwordinput = document.getElementById("passwordenter");
const passwordreturn = document.getElementById('passStrength');

// let yourpass= ""; 

// function passtest(e){
  
//   let typepass = zxcvbn(e.target.value);

//   passwordreturn.innerText = typepass.guesses;
// }

// passwordinput.addEventListener("keydown", passtest);




//Axios Get All

document.getElementById('fetch-all').onclick = function(){
  axios.get('http://localhost:3001/api/api')
  .then((result)=>{

    result.data.forEach((listings)=>{
      display.innerHTML += `
      <div class="character-info">
      <div class="name">${listings.name}</div>
      <br>
      <div class="occupation">${listings.occupation}</div>
      <br>
      <div class="cartoon">${listings.catchPhrase}</div>
      <br>
    </div>`
    

      })
      })

  .catch((err)=>{
    console.log(err);
})
}


//Axios Post 

document.getElementById('create-celeb').onsubmit = function(e){
  e.preventDefault();

    axios.post('http://localhost:3001/api/api', {

      name: cname.value,
      occupation:occ.value,
      catchPhrase: phrase.value
     
      
  })
  .then((theresponse)=>{

    console.log(theresponse);
   
    display.innerHTML += `
    <div class="character-info">
    <div class="name">${theresponse.data.name}</div>
    <div class="occupation">${theresponse.data.occupation}</div>
    <div class="catchPhrase">${theresponse.data.catchPhrase}</div>
  </div>`
  })  .catch((err)=>{
    console.log(err);

})  .catch((error)=>{
  console.log(error);
})

  

  } 


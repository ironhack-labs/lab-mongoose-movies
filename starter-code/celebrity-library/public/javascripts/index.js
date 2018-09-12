// const charactersAPI = new APIHandler("http://localhost:8000")
const myApiHandler = new APIHandler('https://ih-crud-api.herokuapp.com/characters')
let charObject;

$(document).ready( () => {
  
  document.getElementById('fetch-all').onclick = function(){
    myApiHandler.getFullList(); // all functions must be inside promise
   
}
  document.getElementById('fetch-one').onclick = function(){
    myApiHandler.getOneRegister($('#character-id')[0].value)
  }
  
  document.getElementById('delete-one').onclick = function(){
    let inputID =$('#delete-character')[0].value
    myApiHandler.deleteOneRegister(inputID)
  }
  
  document.getElementById('update-data').onclick = function(){
    myApiHandler.updateOneRegister($('#editId')[0].value, {
      name: $('#editName')[0].value,
      occupation: $('#editOccupation')[0].value,
      weapon:$('#editWeapon')[0].value,
    })
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault() // prevents form data from getting errased
    myApiHandler.createOneRegister({
      name: $('#newName')[0].value,
      occupation: $('#newOccupation')[0].value,
      weapon:$('#newWeapon')[0].value,
    });
  }
})


function fetchAll(characterData) {
  const theResultDiv = document.getElementsByClassName('characters-container')[0];
  theResultDiv.innerHTML = "";
  characterData.forEach((eachThing)=>{
  theResultDiv.innerHTML +=
  `<div class="character-info">
      <div class="name">Name: ${eachThing.name}</div>
      <div class="occupation">Occupation: ${eachThing.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${eachThing.debt}</div>
      <div class="weapon">Weapon: ${eachThing.weapon}</div>
    </div>`});
}
function printError() {
  $('.characters-container').html('<h2 style="color:red;">Sorry, no character matches this ID</h2>'); 
}
function fetchOne(characterData) {
  // console.log(characterData)
  const theResultDiv = document.getElementsByClassName('characters-container')[0];
  theResultDiv.innerHTML = "";
  theResultDiv.innerHTML =
  `<div class="character-info">
      <div class="name">Name: ${characterData.name}</div>
      <div class="occupation">Occupation: ${characterData.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${characterData.debt}</div>
      <div class="weapon">Weapon: ${characterData.weapon}</div>
    </div>`;
}

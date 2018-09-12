document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

window.onload = () => {
//   //
  document.getElementById('fetch-all').onclick = getAllCharacters;
  //
  function getAllCharacters() {
    console.log("CARAJO");
    const theResultDiv = document.getElementById('results')
    const bigdiv = document.querySelector(".characters-container")

    axios.get('https://ih-crud-api.herokuapp.com/characters')
      .then((response) => {
        // const theArrayOfStuff = response.data;
        // console.log(theArrayOfStuff);

        document.querySelector(".characters-container").innerHTML = ""

        response.data.forEach((eachThing) => {
          // console.log(eachThing)
          // const name = document.querySelector(".name")
          // const occupation = document.querySelector(".occupation")
          // const debt = document.querySelector(".debt")
          // const weapon = document.querySelector(".weapon")

          var divBox = document.querySelector(".character-info")
          const theResultDiv = document.querySelector(".characters-container")

          theResultDiv.innerHTML += `
            <div class="character-info">
              <div class="name">ID: ${eachThing.id} </div>
              <div class="name">Name: ${eachThing.name} </div>
              <div class="occupation">Occupation: ${eachThing.occupation} </div>
              <div class="weapon">Weapon: ${eachThing.weapon} </div>
            </div>
          `
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  document.getElementById('fetch-one').onclick = FindOneCharacter;

  function FindOneCharacter() {
    // const theResultDiv = document.getElementById('results')
    console.log("CARAJO");
    searchId = ""
    var searchId = document.querySelector(".characterId").value

    axios.get('https://ih-crud-api.herokuapp.com/characters/' + searchId)
      .then((response) => {
        // console.log(response.data.name)
        document.querySelector(".characters-container").innerHTML = ""

        // response.forEach((eachThing)=>{
        const theResultDiv = document.querySelector(".characters-container")

        theResultDiv.innerHTML += `
            <div class="character-info">
            <div class="name">Name: ${response.data.name} </div>
            <div class="occupation">Occupation: ${response.data.occupation} </div>
            <div class="weapon">Weapon: ${response.data.weapon} </div>
            </div>
            `

        document.querySelector(".characterId").value = ""

      })
      .catch((err) => {
        console.log(err)
      })

  }
  document.getElementById('delete-one').onclick = deleteOne;

  function deleteOne() {

    console.log("CARAJO");
    searchId = ""
    var deleteId = document.querySelector(".deleteId").value

    axios.delete('https://ih-crud-api.herokuapp.com/characters/' + deleteId)
      .then((response) => {
        console.log(response.data.name)
        document.querySelector(".characters-container").innerHTML = ""
        document.querySelector(".deleteId").value = ""
        // response.forEach((eachThing)=>{
        const theResultDiv = document.querySelector(".characters-container")
        document.querySelector(".characterId").value = ""
        getAllCharacters()

      })
      .catch((err) => {
        console.log(err)
      })

  }

  document.getElementById('send-data').onclick = function(e) {

    e.preventDefault()

    var name1 = document.querySelector(".namec").value
    var occupation1 = document.querySelector(".occupationc").value
    var weapon1 = document.querySelector(".weaponc").value
    var newData = {
      name: name1,
      occupation: occupation1,
      weapon: weapon1
    }

    const theResultDiv = document.querySelector(".characters-container")
    axios.post('https://ih-crud-api.herokuapp.com/characters',
        newData)
      .then((response) => {
        console.log(response)
        getAllCharacters();
      })
      .catch((err) => {
        console.log(err);
      })
  }


  document.querySelector("#send-update").onclick = (e) => {
    e.preventDefault()

    let id = document.querySelector(".newId").value
    let infoUpdate = {
      name: document.querySelector(".name2").value,
      occupation: document.querySelector(".occupation2").value,
      weapon: document.querySelector(".weapon2").value
    }
    console.log(infoUpdate)

    axios.patch('https://ih-crud-api.herokuapp.com/characters/' + id, infoUpdate)
      .then(response => {
        console.log("update success")
        getAllCharacters()
        document.querySelector(".newId").value = ""
        document.querySelector(".name2").value = ""
        document.querySelector(".occupation2").value = ""
        document.querySelector(".weapon2").value = ""
      })
      .catch(error => {
        console.log(error)
      })
  }

}

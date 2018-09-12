document.addEventListener('DOMContentLoaded', () => {
  console.log("script running");
  // document.getElementById('fetch-movies').onclick = () =>{
  document.getElementById("fetch-movies").onclick = () => {
    axios.get('http://localhost:3000/api/movies')
      .then((allMovies) => {
        console.log(allMovies)


        const results = document.getElementById("results")
        allMovies.data.forEach((each) => {
          console.log(each)

          results.innerHTML += `
          <h2 style="color: black"> ${each.title} <h2>
        `
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  document.getElementById('form-movies').onclick = () => {
    var dummy = '<span>Label: <input type="text"><small>(ft)</small></span>\r\n';
    var wrap = document.getElementById("wrapper")
    // wrap.innerHTML += dummy
    wrap.innerHTML += `
    <form class="newform" action="/movies/create" method="post">
        <label for="newmovie">Title </label>
        <input name="title" id="newmovie" type="text">
        <br> <br>
        <label for="genre">Genre </label>
        <input name="genre" id="genre"type="text">
        <br> <br>
        <label for="image">Image </label>
        <input name="image" id="image"type="text">
        <br> <br>
        <label for="plot">Plot </label>
        <input name="plot" id="plot" type="text">
        <button class="newButton1"> Create </button>
    </form>
    `
    // console.log("create a movie now!")

  }

document.querySelector(".newform").onsubmit = function(e){

  // const theResultDiv = document.querySelector(".characters-container")
  axios.post('/movies/create',{title: req.body.newmovie})
  console.lof(newData)
  // .then((response) => {
  //   console.log(response)
  //   // getAllCharacters();
  // })
  // .catch((err) => {
  //   console.log(err);
  // })

}





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

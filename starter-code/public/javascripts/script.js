document.addEventListener('DOMContentLoaded', () => {

  function getAllTheCelebsAndPutThemOnThePage(){
    let list = document.getElementById('celeb-list');
    axios.get('http://localhost:3000/celebrities/new-celeb/api')
    .then((response)=>{
      let arrayOfStuff = response.data.reverse();
      list.innerHTML = "";
      arrayOfStuff.forEach((theCeleb)=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <h4> ${theCeleb.name} </h4>
        <h6> ${theCeleb.occupation} </h6>
        <p> ${theCeleb.catchPhrase} </p>
        `
        list.appendChild(newDiv);
      })
    })
    .catch((err)=>{
    })
  }

  setTimeout(getAllTheCelebsAndPutThemOnThePage, 7000);

  let celebButton = document.getElementById('new-celeb-button');

  celebButton.onclick = ()=>{
    let name = document.getElementById('name');
    let occupation = document.getElementById('occupation');
    let catchPhrase = document.getElementById('catchPhrase');
    axios.post('http://localhost:3000/celebrities/new-celeb/api', {name: name.value, occupation: occupation.value, catchPhrase: catchPhrase.value})
    .then((res)=>{
        getAllTheCelebsAndPutThemOnThePage();
    })
    .catch((err)=>{
    })

    name.value = "";
    occupation.value = "";
    catchPhrase.value = ""; 

  }

}, false);
document.addEventListener('DOMContentLoaded', () => {

  function printTheCelebs(){
    let list = document.getElementById('celebs-list');
    axios.get('http://localhost:3000/celebrities/api')
    .then((response)=>{
      let arrayOfCelebs = response.data.reverse();
      list.innerHTML = "";
      arrayOfCelebs.forEach((theCeleb)=>{
        let newDiv = document.createElement('div');
        newDiv.setAttribute("class", "each-celeb");
        newDiv.innerHTML = `
        <h4> ${theCeleb.name} </h4>
        <h6> ${theCeleb.occupation} </h6>
        <p> ${theCeleb.catchPhrase} </p>
        `
        list.appendChild(newDiv);
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  setTimeout(printTheCelebs,2000);

  let addButton = document.getElementById('add-btn2');
  addButton.onclick = ()=>{
    let name = document.getElementById('name2');
    let occupation = document.getElementById('occupation2');
    let catchPhrase = document.getElementById('catchPhrase2');

    axios.post('http://localhost:3000/celebrities/api', {
      name: name.value,
      occupation: occupation.value,
      catchPhrase: catchPhrase.value
    })
    .then((res)=>{
        printTheCelebs();
    })
    .catch((err)=>{
      console.log(err);
    })

    name.value = "";
    occupation.value = "";
    catchPhrase.value = "";
  }

}, false);
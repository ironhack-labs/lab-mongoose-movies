document.addEventListener('DOMContentLoaded', () => {
  //
  mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
  mdc.ripple.MDCLineRipple.attachTo(document.querySelector('.foo-field'))
  //
  console.log('IronGenerator JS imported successfully!');
  // new-celebrity-button
  function getAllCelebrtiesAndPutThemOnThePage() {
    let list = document.getElementById('celebrity-list');

    axios.get('http://localhost:3000/api/celebrities')
    .then((response) => {

      let arrayOfStuff = response.data.reverse();
      list.innerHTML = "";

      arrayOfStuff.forEach((theCelebrity)=>{

        let newDiv = document.createElement('div');

        newDiv.innerHTML = `
        <h4> ${theCelebrity.name} </h4>
        <h6> ${theCelebrity.occupation} </h6>
        <p>  ${theCelebrity.catchPhrase} </p>
        <hr>
        `
        list.appendChild(newDiv);
      })

    })
    .catch((err)=>{
      console.log(err);
    })
  }
  //
  setTimeout(getAllCelebrtiesAndPutThemOnThePage,5000)
  //
  let celebrityButton = document.getElementById('new-celebrity-button');

  celebrityButton.onclick = ()=>{
    
    let name = document.getElementById('name');
    let occupation = document.getElementById('occupation');
    let catchPhrase = document.getElementById('catchPhrase');
    if (name.value === "" ) { console.log("empty name");return ;}
    axios
    .post('http://localhost:3000/api/celebrities',{
      name:name.value,
      occupation: occupation.value,
      catchPhrase:catchPhrase.value
    })
    .then((res)=>{
      console.log(" was clicked.." + res);
      getAllCelebrtiesAndPutThemOnThePage();
    })
    .catch((err)=>{
      console.log(err);
    })

    name.value = "";
    occupation.value = "";
    catchPhrase.value = ""

  }


}, false);

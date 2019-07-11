document.addEventListener('DOMContentLoaded', () => {


  function getCelebsOnPage(){

    let list = document.getElementById('celeb-list');

    axios.get('http://localhost:3000/celebrities/add-multiple-celebs')
    .then((response)=>{

      let arrayOfStuff = response.data.reverse();
      list.innerHTML = "";

      arrayOfStuff.forEach((theCeleb)=>{

        let newDiv = document.createElement('div');

        newDiv.innerHTML = `
        <h4> ${theCeleb.name} </h4>
        <h6> Occupation: ${theCeleb.occupation} </h6>
        <p> Catch phrase: ${theCeleb.catchPhrase} </p>
        `
        list.appendChild(newDiv);
      })

     
      
    })
    .catch((err)=>{
      console.log(err)
    })

  }


  setTimeout(getCelebsOnPage,3000)





  let btn = document.getElementById('new-celeb-button');

  btn.onclick = ()=>{

    let name = document.getElementById('name')
    let occupation = document.getElementById('occupation')
    let catchPhrase = document.getElementById('catchPhrase')


    axios.post('http://localhost:3000/celebrities/add-multiple-celebs', {name: name.value , occupation: occupation.value, catchPhrase: catchPhrase.value})
    .then((res)=>{
      console.log(res);
        getCelebsOnPage();

    })
    .catch((err)=>{
      console.log(err)
    })



    name.value = "";
    occupation.value = "";
    catchPhrase.value = ""; 

   
  }

}, false);

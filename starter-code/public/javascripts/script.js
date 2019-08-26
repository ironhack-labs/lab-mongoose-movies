document.addEventListener('DOMContentLoaded', () => {


  function getAllTheCelebsAndPutThemOnThePage(){

    let list = document.getElementById('celeb-list'); //create variable which is pointing to a <ul> tag

    axios.get('http://localhost:3000/axios') //go to this route (if its named the same on the back end how does it know what to do first?)
    .then((response)=>{ //the json that is returned is now called response

      let arrayOfStuff = response.data; //declare var 'arrayofstuff' equal to the *data* inside response
      list.innerHTML = ""; //clear out the html

      arrayOfStuff.forEach((theCeleb)=>{ //for each element inside the array which is the *data*

        let newDiv = document.createElement('div'); //declare var newDiv which is a new div

        newDiv.innerHTML = ` 
        <h4> ${theCeleb.name} </h4>
        <h6> ${theCeleb.occupation} </h6>
        <p> Catchphrase: ${theCeleb.catchPhrase} </p>
        `

        //.innerHTML knows to go INSIDE whatever comes before it and look 
        list.appendChild(newDiv); //very last thing in the forEach is to append new div inside the <ul>
      })



    })
    .catch((err)=>{
      console.log(err)
    })

  }


  setTimeout(getAllTheCelebsAndPutThemOnThePage,1000) //call the function here to get whatever is 
  //currently in the database and show it on the page (after 2 seconds)





  let celebButton = document.getElementById('new-celeb-button'); //point to the button on the hbs file and save it in var celebButton
 
   celebButton.onclick = ()=>{ //when this button is clicked
    //make each input with the respective ID equal to a varable
    let name = document.getElementById('name') 
    let occupation = document.getElementById('occupation')
    let catchPhrase = document.getElementById('catchPhrase')

    //then with axios, take that information and ***do what exactly?***
    axios.post('http://localhost:3000/axios', {name: name.value , occupation: occupation.value, catchPhrase: catchPhrase.value})
    .then((res)=>{

        getAllTheCelebsAndPutThemOnThePage();

    })
    .catch((err)=>{
      console.log(err)
    })


    //empty out the form
    name.value = ""; 
    occupation.value = "";
    catchPhrase.value = ""; 


  }


  // console.log('IronGenerator JS imported successfully!');

}, false);

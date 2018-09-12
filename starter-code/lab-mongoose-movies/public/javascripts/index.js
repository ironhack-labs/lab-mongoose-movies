//const charactersAPI = new APIHandler("http://localhost:8000")

// $(document).ready( () => {
document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('fetch-all').onclick = fetchAll;
  
  function fetchAll(){

    //x.querySelector(".example").innerHTML = "Hello World!";
    const allCharectorSection = document.querySelector(".characters-container")

    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
      
        allCharectorSection.innerHTML = "";

        response.data.forEach((eachThing)=>{

          //-------- example from index.html
            // <section class="container">
            // <h1>Ironhack Characters API</h1>
            // <div class="characters-container">
            //   <div class="character-info">
            //     <div class="name">Character Name</div>
            //     <div class="occupation">Character Occupation</div>
            //     <div class="cartoon">has dept?</div>
            //     <div class="weapon">Character Weapon</div>
            //   </div>
            // </section> 
          
            allCharectorSection.innerHTML += `
            <div class="characters-container">
              <div class="character-info">
                <div class="id">id:${eachThing.id}</div>
                <div class="name">Character Name:${eachThing.name}</div>
                <div class="occupation">Character Occupation:${eachThing.occupation}</div>
                <div class="cartoon">has dept:${eachThing.depth}</div>
                <div class="weapon">Character Weapon:${eachThing.weapon}</div>
              </div>
            </section> 
            `
        })
    })
    .catch((err)=>{
        console.log(err)
    })

  } //---------- End fetch-all
  
  document.getElementById('fetch-one').onclick = function(){

        //x.querySelector(".example").innerHTML = "Hello World!";
        const charectorSection = document.querySelector(".characters-container")
        const theInput = document.getElementById('one-character');

        axios.get('https://ih-crud-api.herokuapp.com/characters/' + theInput.value)
        .then((response)=>{
          
          let oneCharector = response.data;

            charectorSection.innerHTML = "";
              
                charectorSection.innerHTML += `
                <div class="characters-container">
                  <div class="character-info">
                    <div class="id">id:${oneCharector.id}</div>
                    <div class="name">Character Name:${oneCharector.name}</div>
                    <div class="occupation">Character Occupation:${oneCharector.occupation}</div>
                    <div class="cartoon">has dept:${oneCharector.depth}</div>
                    <div class="weapon">Character Weapon:${oneCharector.weapon}</div>
                  </div>
                </section> 
                `
        })
        .catch((err)=>{
            console.log(err)
        })
    
  } // -------------- End fetch-one
  
  document.getElementById('delete-one').onclick = function(){

            const theInput = document.getElementsByName('character-id-delete');
    
            axios.delete('https://ih-crud-api.herokuapp.com/characters/' + theInput[0].value, {} )
            .then((response)=>{
              console.log(response)
            })
            .catch((err)=>{
                console.log(err)
            })
        
  }// -------------- End delete-one

  document.getElementById('edit-character-form').onsubmit = function(e){

    e.preventDefault();
    // document.getElementById('send-data').onclick = function(){

      const theID          = document.getElementsByName('chr-id');
      const name           = document.getElementsByName('name');
      const occupation     = document.getElementsByName('occupation');
      const weapon         = document.getElementsByName('weapon');
      const cartoon        = document.getElementsByName('cartoon');

console.log("-=-=-=-=-=-=-=-=-=-="+theID[0].value)
console.log("-=-=-=-=-=-=-=-=-=-="+name[1].value)
console.log("-=-=-=-=-=-=-=-=-=-="+occupation[1].value)
console.log("-=-=-=-=-=-=-=-=-=-="+weapon[1].value)
console.log("-=-=-=-=-=-=-=-=-=-="+cartoon[1].value)


      axios.put('https://ih-crud-api.herokuapp.com/characters/' + theID[0].value, {

        id         : theID[0].value,       
        name       : name[1].value,     //---- hase two in index.html with name of name etc.       
        occupation : occupation[1].value,    
        weapon     : weapon[1].value,         
        cartoon    : cartoon[1].value

      } )
      .then((response)=>{
        console.log(response)
      })
      .catch((err)=>{
          console.log(err)
      })
            
  }// -------------- End edit-character-form'
  
  document.getElementById('new-character-form').onsubmit = function(){

    const name           = document.getElementsByName('name');
    const occupation     = document.getElementsByName('occupation');
    const weapon         = document.getElementsByName('weapon');
    const cartoon        = document.getElementsByName('cartoon');

    console.log("-=-=-=-=-=-=-=-=-=-="+name[0].value)
    console.log("-=-=-=-=-=-=-=-=-=-="+occupation[0].value)
    console.log("-=-=-=-=-=-=-=-=-=-="+weapon[0].value)
    console.log("-=-=-=-=-=-=-=-=-=-="+cartoon[0].value)


    axios.post('https://ih-crud-api.herokuapp.com/characters', {
       
      name       : name[0].value,           
      occupation : occupation[0].value,    
      weapon     : weapon[0].value,         
      cartoon    : cartoon[0].value

    } )
    .then((response)=>{
      console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })

                
  }// -------------- End new-character-form

})// -------------- End ready document

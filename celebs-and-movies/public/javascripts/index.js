const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    // const theResultDiv = document.getElementById('results')

    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
        $('.characters-container').empty();

          response.data.forEach((character)=>{
            console.log(character)
            let charInfo = `
            <div class="character-info">
            <div class="name"> Name:  ${character.name} </div>
            <div class="occupation"> Occupation: ${character.occupation} </div>
            <div class="weapon"> Weapon: ${character.weapon} </div>
            </div>
            `;

            $('.characters-container').append(charInfo)
        })
    })

  }
  
  document.getElementById('fetch-one').onclick = function(){
   let theId = document.getElementById('character-id').value;
   
   axios.get(`https://ih-crud-api.herokuapp.com/characters/${theId}`)
   .then((ret)=>{$('.characters-container').empty();

     let charInfo = `
     <div class="character-info">
     <div class="name"> Name:  ${ret.data.name} </div>
     <div class="occupation"> Occupation: ${ret.data.occupation} </div>
     <divs class="weapon"> Weapon: ${ret.data.weapon} </divs>
     </div>
     `;

     $('.characters-container').append(charInfo)
 })
   
    
  }
  
  document.getElementById('delete-one').onclick = function(){
    let theId = document.getElementById('character-id-delete').value;
   
   axios.delete(`https://ih-crud-api.herokuapp.com/characters/${theId}`)
   .then((ret)=>{$('.characters-container').empty();

   let charInfo =
   `<div class="character-info">
   <div class="name">Character ID ${theID} has been DELETED</div>
   </div>`;

   $('.characters-container').append(charInfo)
  
  
  })
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    const charID = $('#edit-id').val();
    const charName = $('#edit-name').val();
    const charOcc = $('#edit-occupation').val();
    const charWeapon = $('#edit-weapon').val();


    const charUpdate = {
      name: charName,
      occupation: charOcc,
      weapon: charWeapon,
      debt: true,
    };


    console.log(charName);
    console.log(charOcc);
    console.log(charWeapon);


    axios.patch(`https://ih-crud-api.herokuapp.com/characters/` + charID, charUpdate)
    .then((ret)=>{
      console.log(ret)
      $('.character-info').html(`<div class="character-container><h1>${charName} has been Updated!<h1><div>`) 
   
   
    
            
  })
  .catch((err)=> {
    console.log(err)
  })
}
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    const charName = $('#new-name').val();
    const charOcc = $('#new-occupation').val();
    const charWeapon = $('#new-weapon').val();


    axios.post(`https://ih-crud-api.herokuapp.com/characters/`,
    {name: charName,
    occupation: charOcc,
    weapon: charWeapon,
    debt: false
    })
    .then((ret)=>{
      console.log('!@#$!@#$!@#$@#$%^@#$%@#$^#$%^#$%^#$%^$&%^&$%^&$')
      console.log(ret)
      let theId = ret.data.id;
     axios.get(`https://ih-crud-api.herokuapp.com/characters/${theId}`)
   .then((ret)=>{$('.characters-container').empty();

     let charInfo = `
     <div class="character-info">
     <div class="name"> Name:  ${ret.data.name} </div>
     <div class="occupation"> Occupation: ${ret.data.occupation} </div>
     <divs class="weapon"> Weapon: ${ret.data.weapon} </divs>
     </div>
     `;

     $('.characters-container').append(charInfo)
 })

    })
                
  }
})

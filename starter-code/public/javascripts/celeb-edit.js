document.addEventListener('DOMContentLoaded', () => {

  let inputs = document.querySelectorAll('#edit-form input')

  for(let i = 0; i < inputs.length; i++){
    inputs[i].onkeyup = function(){
      let name = document.getElementById('name').value;
      let occupation = document.getElementById('occupation').value;
      let catchphrase = document.getElementById('catchPhrase').value;
      let id = document.getElementById('secret').value;

      axios.post('/api/celebs/edit/'+id,{
        name: name,
        occupation: occupation,
        catchPhrase: catchphrase,
      })
      .then(resp=>{
        console.log(resp)
        axios.get('/api/celebs/details/'+ id)
        .then(response=>{
          let updatedCelebrity = response.data;
          document.getElementById('current-name').innerText = updatedCelebrity.name;
          document.getElementById('current-occupation').innerText = updatedCelebrity.occupation;
          document.getElementById('current-catchphrase').innerText = updatedCelebrity.catchPhrase;
        })
        .catch(err=>console.log(err))
      })
    }
  }

},false);

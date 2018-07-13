document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

$('#get-celebrities').click(function(){
  console.log('button clicked!')

  axios.get('/api/celebrities')
  .then((response)=>{
    $('.celebrity-list').empty();

    response.data.forEach((eachCelebrity)=>{
      const newCelebrityDiv = `
      <h3>Celebrity Name: ${eachCelebrity.name}</h3>
      <p>Occupation: ${eachCelebrity.occupation}</p>
      <p>Catchphrase: ${eachCelebrity.catchPhrase}</p>
      <hr>
      `
      $('.celebrity-list').append(newCelebrityDiv);
    })
    
  })






})


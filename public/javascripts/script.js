document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

$('#get-celebs').click(function(){
  axios.get('api/celebrities')

  .then((allTheCelebs)=>{
    $('.celeb-list').empty();

    allTheCelebs.data.forEach((eachCeleb)=>{
      const newCelebDiv =
      `
      <h3>${eachCeleb.name}</h3>
      <p>${eachCeleb.occupation}</p>
      <p>${eachCeleb.catchPhrase}</p>
      `
      $('.celeb-list').append(newCelebDiv);
    })
  })

})


$('#get-celebs').click(function(){

  axios.get('/api/celebrities')

  .then((allTheCelebs)=>{

    $('.celeb-list').empty();

    allTheCelebs.data.forEach((eachCeleb)=>{
      const newCelebDiv = `
      <h4>${eachCeleb.name}</h4>
      <p>${eachCeleb.occupation}</p>
      <p>${eachCeleb.catchPhrase}</p>
      <hr>
      `
      $('.celeb-list').append(newCelebDiv);
    })
  })
})


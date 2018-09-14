document.addEventListener('DOMContentLoaded', () => {
  // console.log('IronGenerator JS imported successfully!');

  document.getElementById('fetch-movies').onclick = fetchAllMovies;

  function fetchAllMovies() {
    axios.get('/api/movies')
    .then((response)=>{
      const movieList=response.data
      console.log('axios.get went through !!!!!!--=--=-=-=-=')
      console.log(movieList)
      const theResultDiv = document.getElementById('listOfMovies');
      theResultDiv.innerHTML = "";
      movieList.forEach((eachThing)=>{
      theResultDiv.innerHTML +=
        `<h2>${eachThing.title}</h2>
        <p>Director: ${eachThing.director}</p>
        <img class="imag" src="${eachThing.image}" alt="movie cover">
        <a class="btn" href="/movies/${eachThing._id}">See Details</a>
        `});
      }).catch((err)=>{console.log(err)})
  }
// this isn't working and I'm not sure why, it was working well before
  document.getElementById('addMovie').onclick = function(e){
    e.preventDefault()
    let newMovie = { 
      title:$('#addTitle')[0].value,
      director: $('#addDirector')[0].value,
      image: $('#addImage')[0].value,
      description:$('#addDescription')[0].value,
    } // newMovie will be: req.body
    axios.post('/api/movies/create', newMovie) 
    .then((response)=>{
      console.log("got one registered....", response)
      fetchAllMovies() 
    })
    .catch((err)=>{
        console.log(err);
    })
  }











}, false);


// function confirmFunc() {
//   confirm("Do you want to delete this Cat?");
// }

// window.onload = function(){
// var deleteButton = document.getElementById('btn-delete');
// deleteButton.onclick =confirmFunc;
// };
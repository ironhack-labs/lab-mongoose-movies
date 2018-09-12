
  document.getElementById('fetch-movies').onclick = function(){
    movieCall();
  }

  document.getElementById('new-movie-form').onsubmit = function(e){
    e.preventDefault();
    movieMake();
  }



  function movieMake(){
    const movieTitle = $('#new-title').val();
    const movieGenre = $('#new-genre').val();
    const moviePlot = $('#new-plot').val();
    const theStar = $('#new-star').val();

    axios.post('http://localhost:3000/movies/create',
    {
      movieTitle: movieTitle,

      movieGenre: movieGenre,

    moviePlot: moviePlot,

    movieStar: theStar,
    })
    .then((ret)=>{
      console.log(ret)
      movieCall();
      res.json(ret);
        

    })
    .catch((err)=>{
      console.log(err);
    })
  }


function movieCall() {
  axios.get('http://localhost:3000/api/movies')
  .then((ret)=> {
    console.log((ret))
    const resultDiv = document.getElementById('results');  
    $('#results').empty();

    ret.data.forEach(movie => {
      // console.log(movie.title)
      
      resultDiv.innerHTML += `
      
      <h2> ${movie.title} </h2>`
      
    });
  })

}
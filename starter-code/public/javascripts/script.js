document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

  //GET ACTORS OPTIONS LIST AND CLEAR IT
  let listOfActors = document.getElementById('actors-list');
  listOfActors.innerHTML = '';

  //GET ACTORS
  axios.get('http://localhost:3000/ajaxActors')
    .then((response)=> {
      response.data.forEach((each)=>{
        let actor = document.createElement('option');
        actor.setAttribute('value', each._id);
        actor.innerText = each.name;
        
        listOfActors.appendChild(actor);
      });
    })
    .catch(error => {
        console.log('Oh No! Error is: ', error);  
    });

  //GET MOVIES
  function getTheMovieList(){

    let listOfMovies = document.getElementById('movie-list');

    axios.get('http://localhost:3000/ajaxMoviesApi')
      .then((response)=> {

        listOfMovies.innerHTML = '';

        response.data.forEach((each)=>{
          let movie = document.createElement('div');
          movie.setAttribute('class', 'movie');
          movie.innerHTML = `<h2>${each.name}</h2>
                            <h4>${each.genre}</h4>
                            <p>${each.plot}</p>`;

          listOfMovies.appendChild(movie);

          if(Object.keys(each).includes('actor')){
            let actor = document.createElement('h5');
            actor.innerText = each.actor.name;
            movie.appendChild(actor);
          }

        });
      })
      .catch(error => {
          console.log('Oh No! Error is: ', error);  
      });
  }

  setTimeout(getTheMovieList, 3000);

  

  //CREATE NEW MOVIE
  document.getElementById('ajaxCreateMovies').onsubmit = (e)=>{

    e.preventDefault();

    let newMovie = {
      name:  document.getElementById('movie-name').value,
      genre: document.getElementById('movie-genre').value,
      plot:  document.getElementById('movie-plot').value,
      actor: document.getElementById('actors-list').value
    };

    axios.post('http://localhost:3000/ajaxCreateMovie', newMovie)
    .then((response)=>{
      console.log('Yay', response);
      getTheMovieList();
      document.getElementById('movie-name').value = '';
      document.getElementById('movie-genre').value = '';
      document.getElementById('movie-plot').value = '';
    })
    .catch();
  } 

}, false);
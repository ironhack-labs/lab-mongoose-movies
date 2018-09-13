document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('fetch-movies').onclick = getAllMovies;
    
  
  function getAllMovies(){

    axios.get('http://localhost:3000/api/movies')
    .then((resultList)=>{
      const resultDiv = document.getElementById('results')
      resultDiv.innerHTML = '';
      resultList.data.forEach((eachThing)=>{
        resultDiv.innerHTML +=`
        <h2>${eachThing.title}</h2>
        `
      })
    })
    .catch((err)=>{
      
    })
  }


  document.getElementById('create-movie-btn').onclick = (e) => {
    e.preventDefault();
    const newInfo = {
      title: document.getElementById('new-title').value,
      genre: document.getElementById('new-genre').value,
      image: document.getElementById('new-image').value
    };
    axios.post('http://localhost:3000/movies/create', newInfo)
    .then((infoSent) =>{
      getAllMovies();
    })
    .catch((err) => {

    })
  }

  console.log('IronGenerator JS imported successfully!');

}, false);

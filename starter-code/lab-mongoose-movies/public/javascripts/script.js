document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');


  document.getElementById('fetch-movies').onclick = fetchAllMovies;
  
  function fetchAllMovies() {
    axios.get('http://localhost:3000/api/movies-json')
    .then((listOfThings)=>{



      const resultDiv = document.getElementById('results')


      resultDiv.innerHTML ="";

      listOfThings.data.forEach((eachThing)=>{

        resultDiv.innerHTML += `
        <h2> ${eachThing.title} <h2>
        `
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  } // ----------- End fetch-movies btn


      document.getElementById('create-movies').onclick = () =>{

        const title1  = document.getElementById('title1').value;
        const genre1  = document.getElementById('genre1').value;
        const plot1   = document.getElementById('plot1').value;
        const image1  = document.getElementById('image1').value;

        console.log("-=-=-=-=-=-=-=-=-=",title1);
        console.log("-=-=-=-=-=-=-=-=-=",genre1);
        console.log("-=-=-=-=-=-=-=-=-=",plot1);
        console.log("-=-=-=-=-=-=-=-=-=",image1);
    
        axios.post('/api/movies-json/create', {
            title: title1,
            genre: genre1,
            plot:  plot1,
            image: image1
        })
        .then((response)=>{
          console.log('=-=-=-=-=--=-=', response)
          fetchAllMovies();
        })
        .catch((err)=>{
          console.log(err);
        })
         
      } // ----------- End create-movies btn

}, false); // ----------- End DOMContentLoaded



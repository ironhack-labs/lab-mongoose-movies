document.addEventListener('DOMContentLoaded', () => {


  document.getElementById('fetch-movies').onclick = () =>{
    axios.get('http://localhost:3000/api/movies')
    .then((listOfThings)=>{




      const resultDiv = document.getElementById('results')

      listOfThings.data.forEach((eachThing)=>{

        console.log(eachThing)

        resultDiv.innerHTML += `
        <h2> ${eachThing.title}</h2>
        `
      })
    })


    .catch((err)=>{
      console.log(err)
    })
  }


}, false);

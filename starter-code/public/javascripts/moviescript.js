document.addEventListener('DOMContentLoaded', () => {

  function getMoviesOnPage(){
    console.log("hola")
    let list = document.getElementById('movie-list');

    axios.get('http://localhost:3000/movies/add-multiple-movies')
    .then((response)=>{

      let arrayOfStuff = response.data.reverse();
      list.innerHTML = "";

      arrayOfStuff.forEach((theMovie)=>{

        let newDiv = document.createElement('div');

        newDiv.innerHTML = `
        <h4> ${theMovie.title} </h4>
        <h6> Genre: ${theMovie.genre} </h6>
        <p> Plot: ${theMovie.plot} </p>
        <p>Actor(s): 
        `
        theMovie.actor.forEach((e)=>{
          newDiv.innerHTML += `<a href="/celebrities/details/${e._id}">${e.name}</a><br>`
        })
        list.appendChild(newDiv);
      })

     
      
    })
    .catch((err)=>{
      console.log(err)
    })

  }


  setTimeout(getMoviesOnPage,3000)





  let moviebtn = document.getElementById('new-movie-button');

  moviebtn.onclick = ()=>{
    let title = document.getElementById('title')
    let genre = document.getElementById('genre')
    let plot = document.getElementById('plot')
    let actor = document.getElementsByName('celebs');
    let arr = [];
    actor.forEach((e)=>{
      if(e.checked !== false){
        console.log('test')
        arr.push(e.value);
      }
    })
    console.log(arr);
    console.log(title.value);
    console.log(plot.value);
    console.log(genre.value);


    axios.post('http://localhost:3000/movies/add-multiple-movies', {title: title.value , genre: genre.value, plot: plot.value, actor: arr})
    .then((res)=>{
      console.log(res);
        getMoviesOnPage();

    })
    .catch((err)=>{
      console.log(err)
    })



    title.value = "";
    genre.value = "";
    plot.value = ""; 
    actor.forEach((e)=>{
      e.checked = false;
    })

   
  }







}, false);

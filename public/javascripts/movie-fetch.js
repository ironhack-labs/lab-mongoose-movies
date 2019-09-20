document.addEventListener(
  "DOMContentLoaded",
  () => {
    const theButtons = document.getElementsByClassName("fetch-details-button");

    for (let i = 0; i < theButtons.length; i++) {
      theButtons[i].onclick = function(e) {
        const theId = e.currentTarget.dataset.id;
        axios
          .get("http://localhost:3000/api/movies/" + theId)
          .then(info => {
            console.log(info.data, theId);
            let newStuff = `<h2>${info.data.title}</h2>`;
            document.getElementById("deets").innerHTML = newStuff;
          })
          .catch(err => {
            console.log(err);
          });
      };
    }

    document.getElementById("add-new-movie-form").onSubmit = function(e) {
      e.preventDefault();
      const title = document.getElementById("new-title").value;
      const director = document.getElementById("new-director").value;
      const image = document.getElementById("new-image").value;

      axios
        .post("http://localhost:3000/api/movies/creation", {
          theTitle: title,
          theDirector: director,
          theImage: image
        })
        .then(result => {
          const theNewMovie = result.data;



          document.getElementById("movie").appendChild

          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    };

    console.log("we're on the right page");
  },
  false
);

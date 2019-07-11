document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");

    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);

    //Celebrities quick add functionality BEGIN
    function getAllCelebritiesAndPutThemOnThePage() {
      let list = document.getElementById("celebrities-list");

      axios
        .get("http://localhost:3000/celebrities-quick-info")
        .then(result => {
          let arrayOfStuff = result.data.reverse();
          list.innerHTML = "";

          arrayOfStuff.forEach(celebritie => {
            let newDiv = document.createElement("div");

            newDiv.innerHTML = `
            <h4> ${celebritie.name} </h4>
            <h3> ${celebritie.occupation} </h3>
            <p> Catch Phrase: ${celebritie.catchPhrase} </p>
            <p> Famous for: ${celebritie.famousFor} </p>
            <p> =-=-=-=-= </p>
            `;

            list.appendChild(newDiv);

            //celebrities quick add list style to make it scrollable
            let parentDiv = document.getElementById("celeb-list");
            if (parentDiv.clientHeight > 450) {
              parentDiv.setAttribute(
                "style",
                "overflow-y:scroll; height:450px;"
              );
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
    //display it for the first time
    getAllCelebritiesAndPutThemOnThePage();

    let quickCreateACelebButton = document.getElementById("new-celeb-button");

    quickCreateACelebButton.onclick = () => {
      let occupation = document.getElementById("occupation");
      let name = document.getElementById("name");
      let catchPhrase = document.getElementById("catchPhrase");
      let famousFor = document.getElementById("famousFor");

      //this is req.body. Important
      axios
        .post("http://localhost:3000/celebrities-quick-create", {
          name: name.value,
          occupation: occupation.value,
          catchPhrase: catchPhrase.value,
          famousFor: famousFor.value
        })
        .then(result => {
          console.log(result);
          getAllCelebritiesAndPutThemOnThePage();
        })
        .catch(err => {
          console.log(err);
        });

      name.value = "";
      occupation.value = "";
      catchPhrase.value = "";
      famousFor.value = "";

      //rebuild the list when the button is clicked
      getAllCelebritiesAndPutThemOnThePage();
    };
    //celebrities quick add END
  },
  false
);

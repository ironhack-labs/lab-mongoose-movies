document.addEventListener(
  "DOMContentLoaded",
  () => {
    function getAllTheCelebsAndPutThemOnThePage() {
      let list = document.getElementById("celeb-list");
      console.log("ddeede", list);
      axios
        .get("http://localhost:3000/celebrities/Api-call")
        .then(response => {
          let arrayOfStuff = response.data.reverse();
          list.innerHTML = "";

          arrayOfStuff.forEach(theCeleb => {
            let newDiv = document.createElement("div");

            newDiv.innerHTML = `
        <h4> ${theCeleb.name} </h4>
        <h6> ${theCeleb.occupation} </h6>
        <p>  ${theCeleb.catchPhrase} </p>
        `;
            list.appendChild(newDiv);
          });
        })
        .catch(err => {
          console.log(err);
        });
    }

    setTimeout(getAllTheCelebsAndPutThemOnThePage(), 3000);

    let createButton = document.getElementById("api-create-button");

    createButton.onclick = () => {
      let name = document.getElementById("name");
      let occupation = document.getElementById("occupation");
      let catchPhrase = document.getElementById("catchPhrase");
      console.log("wdfejejfeew", name.value);

      axios
        .post("http://localhost:3000/celebrities/Api-call", {
          name: name.value,
          occupation: occupation.value,
          catchPhrase: catchPhrase.value
        })
        .then(res => {
          getAllTheCelebsAndPutThemOnThePage();
        })
        .catch(err => {
          console.log(err);
        });

      name.value = "";
      occupation.value = "";
      catchPhrase.value = "";
    };
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    function getAllTheCelebsAndPutThemOnThePage() {
      let list = document.getElementById("celeb-list");

      axios
        .get("http://localhost:3000/celebAPI")
        .then(response => {
          let arrayOfStuff = response.data.reverse();
          list.innerHTML = "";

          arrayOfStuff.forEach(theCelebrity => {
            let newDiv = document.createElement("div");

            newDiv.innerHTML = `
        <h4> ${theCelebrity.name} </h4>
        <h6> ${theCelebrity.occupation} </h6>
        <p> Catchphrase: ${theCelebrity.catchphrase} </p>
        `;
            list.appendChild(newDiv);
          });
        })
        .catch(err => {
          console.log(err);
        });
    }

    setTimeout(getAllTheCelebsAndPutThemOnThePage, 7000);

    // CELEB BUTTON

    let newCelebButton = document.getElementById("new-celeb-button");

    newCelebButton.onclick = () => {
      let name = document.getElementById("name");
      let occupation = document.getElementById("occupation");
      let catchphrase = document.getElementById("catchphrase");

      axios
        .post("http://localhost:3000/celebAPI", {
          name: name.value,
          occupation: occupation.value,
          catchphrase: catchphrase.value
        })
        .then(res => {
          getAllTheCelebsAndPutThemOnThePage();
        })
        .catch(err => {
          console.log(err);
        });

      name.value = "";
      occupation.value = "";
      catchphrase.value = "";
    };
  },
  false
);

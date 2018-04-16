document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

const addQuote = () => {
  // Adds an element to the document
  let newInput = document.createElement("input"),
    destination = document.getElementById("quotesList").lastElementChild
  destination.insertBefore(newInput, destination.lastElementChild);
  newInput.setAttribute("type", "text");
  newInput.setAttribute("name", "catchPhrase");
};

window.onload = () =>{
  let addLink = document.getElementById("add")
  addLink.onclick = addQuote
}
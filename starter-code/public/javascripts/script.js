document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 20000);
}

function showPage() {
  document.querySelectorAll(".loader").forEach(loader => loader.style.display = "none")
  document.querySelectorAll(".myImg").forEach(img => img.style.display = "block")
}
myFunction()
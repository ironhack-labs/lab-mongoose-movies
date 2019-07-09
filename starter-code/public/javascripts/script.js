

const passwordinput = document.getElementById("passwordenter");
const passwordreturn = document.getElementById('passStrength');

//let yourpass= ""; 

function passtest(e){
  
  let typepass = zxcvbn(e.target.value);

  passwordreturn.innerText = typepass.guesses;
}





passwordinput.addEventListener("keydown", passtest);
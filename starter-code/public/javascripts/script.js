document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

  const showMenu = (e) => {
    console.log('hola');
    const id = e.currentTarget.getAttribute('data-toggle');
    document.getElementById(id).classList.toggle('open');
  }
  
  const btnMenu = document.querySelectorAll('.btnMenu');
  btnMenu.forEach(button => {
    button.addEventListener('click', showMenu);
  })

}, false);

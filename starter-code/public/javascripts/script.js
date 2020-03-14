document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


//the function to make the pre-selection for the edit-movie.hbs
function preFillTheMultiSelect () {
  const multiSelection = document.querySelector('#edit-movie-cast');
  const cast = document.querySelector('.edit-movie-cast')
  let castIdArr = [...cast.children].map(li => li.innerHTML);
  console.log(castIdArr);
  console.log([...multiSelection.children][1].value);

  [...multiSelection.children].forEach(op => {
    if(castIdArr.includes(op.value)) {
    op.selected = true;
    }
  })
}

preFillTheMultiSelect();





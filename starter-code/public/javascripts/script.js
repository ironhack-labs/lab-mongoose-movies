document.addEventListener('DOMContentLoaded', () => {
  console.log('IronGenerator JS imported successfully!');
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left'
  });
  
}, false);

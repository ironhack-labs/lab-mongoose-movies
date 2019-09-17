document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

// function selectCast(select)
// {
//   var option = select.options[select.selectedIndex];
//   var ul = select.parentNode.getElementsByTagName('ul')[0];
     
//   var choices = ul.getElementsByTagName('input');
//   for (var i = 0; i < choices.length; i++)
//     if (choices[i].value == option.value)
//       return;
     
//   var li = document.createElement('li');
//   var input = document.createElement('input');
//   var text = document.createTextNode(option.firstChild.data);
     
//   input.type = 'hidden';
//   input.name = 'celebrities[]';
//   input.value = option.value;

//   li.appendChild(input);
//   li.appendChild(text);
//   li.setAttribute('onclick', 'this.parentNode.removeChild(this);');     
    
//   ul.appendChild(li);
// }
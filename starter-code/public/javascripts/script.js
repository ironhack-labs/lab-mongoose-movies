document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

Handlebars.registerHelper('isdefined', function (value) {
  return value !== undefined;
});
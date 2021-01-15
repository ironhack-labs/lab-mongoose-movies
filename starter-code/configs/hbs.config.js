const hbs = require('hbs');


hbs.registerHelper('isInvalid', (error) => {
    return error ? 'is-invalid' : ''
  });
  
  hbs.registerHelper('formError', (error) => {
    return error ? new hbs.SafeString(`<div class="invalid-feedback">${error}</div>`) : ''
  });
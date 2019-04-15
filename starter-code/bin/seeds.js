const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbtitle = 'celebrity-project';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

const celebrities = [
    {
        name: 'Mads Mikkelsen',
        occupation: 'Actor',
        catchPhrase:
            'Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger an.'
    },
    {
        name: 'Daniel Day-Lewis',
        occupation: 'Actor',
        catchPhrase:
            'Attachment excellence announcing or reasonable am on if indulgence. Exeter talked in agreed spirit no he unable do.'
    },
    {
        name: 'Edward Norton',
        occupation: 'Actor',
        catchPhrase:
            'In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put.'
    }
];

Celebrity.create(celebrities)
    .then(() => console.log(`Created ${celebrities.length} celebrities`))
    .catch(err => console.error(err));

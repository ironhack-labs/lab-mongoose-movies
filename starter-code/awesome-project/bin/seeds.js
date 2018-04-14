const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrity-project';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
        name: "Mark Wahlberg",
        occupation: "actor",
        catchPhrase: "I've always wanted to do right in life. But the wanting and the doing aren't quite the same thing."
    },
    {
        name: "Charlize Theron",
        occupation: "actress",
        catchPhrase: "I think in life we want to challenge ourselves."
    },
    {
        name: "Michael Phelps",
        occupation: "swimmer",
        catchPhrase: "I can only control my own performance. If I do my best, then I can feel good at the end of the day."
    },
]

Celebrity.create(celebrities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrities.length} celebrities`) //Enterarme de este tipo de sintaxis
    mongoose.connection.close()
});


















// Create an array of 3 objects, each with name, occupation and catchPhrase for our initial celebrities.
// Call the Celebrity model's create method with the array as argument.
// In the create method's callback, display feedback.
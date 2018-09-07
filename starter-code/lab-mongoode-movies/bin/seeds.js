const Celebrity = require('../models/celebrity');

const mongoose = require('mongoose');
const celebrities = [
    {
        name: "Kanye West",
        occupation: "Singer",
        catchPhrase: "People always tell you, 'Be humble. Be humble.' When was the last time someone told you to be amazing?"
    },
    {
        name: "Eminem",
        occupation: "Singer",
        catchPhrase: "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed."
    },
    {
        name: "Arnold Shwarzenegger",
        occupation: "Singer",
        catchPhrase: "I'll be Back"
    }
];

async function fillDataBase(arr) {
    let response = await Celebrity.insertMany(arr);
console.log(response);
    if(response.length) {
        console.log("Celebrities were added to database!");
    } else {
        console.log("Something went wrong!");
    }
}

fillDataBase(celebrities);
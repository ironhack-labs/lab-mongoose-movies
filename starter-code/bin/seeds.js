const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie')

const dbName = 'lab-mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true});

const celebrities = [
    {
        name: 'Ellen DeGeneres',
        occupation: 'TV Host',
        catchPhrase: 'Be kind to one another'
    }, 
    {
        name: 'Dave Chappelle',
        occupation: 'Comedian',
        catchPhrase: 'No, you shut up'
    },
    {
        name: 'Julia Louis-Dreyfus',
        occupation: 'Comedian',
        catchPhrase: 'His opinion is what really mattered'
    }
]

const movies = [
    {
        title: 'Get Out',
        genre: 'Horror',
        plot: `Now that Chris (Daniel Kaluuya) and his girlfriend, Rose (Allison Williams), have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway upstate with Missy and Dean. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.`
    }, 
    {
        title: 'Blue Jasmine',
        genre: 'Black comedy',
        plot: `After her marriage to a wealthy businessman (Alec Baldwin) collapses, New York socialite Jasmine (Cate Blanchett) flees to San Francisco and the modest apartment of her sister, Ginger (Sally Hawkins). Although she's in a fragile emotional state and lacks job skills, Jasmine still manages to voice her disapproval of Ginger's boyfriend, Chili (Bobby Cannavale). Jasmine begrudgingly takes a job in a dentist's office, while Ginger begins dating a man (Louis C.K.) who's a step up from Chili.`
    },
    {
        title: 'Lady Bird',
        genre: 'Comedy-drama',
        plot: `Marion McPherson, a nurse, works tirelessly to keep her family afloat after her husband loses his job. She also maintains a turbulent bond with a teenage daughter who is just like her: loving, strong-willed and deeply opinionated.`
    }
]

Celebrity.deleteMany()
    .then(() => Celebrity.create(celebrities))
    .then(celebrities => {
        console.log(`Created ${celebrities.length} celebrities`)
        mongoose.connection.close()
    })

Movie.deleteMany()
    .then(() => Movie.create(movies))
    .then(movies => {
        console.log(`Created ${movies.length} movies`)
        mongoose.connection.close()
    })
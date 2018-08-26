const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebSchema = new Schema(
    {
        name: String,
        occupation: String,
        catchPhrase: String,
    }
)


const celeb = mongoose.model('celeb', celebSchema)

module.exports = celeb


// Create the celebrity.js model file in the models/ folder.
// In the celebrity.js model file:
// Create the celebrity schema with name, occupation and catchPhrase.
// Create the Celebrity model with the schema.
// Export the Celebrity model.
// Create the seeds.js file in the bin/ folder.
// In seeds.js file:
// Create an array of 3 objects, each with name, occupation and catchPhrase for our initial celebrities.
// Call the Celebrity model's create method with the array as argument.
// In the create method's callback, display feedback.
// Run the seed file with node to seed your database.
// Check the database with the mongo command to confirm that your data was saved.
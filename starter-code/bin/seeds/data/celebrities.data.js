require("dotenv").config()
const faker = require("faker");

const celebritiesData = Array(+process.env.CELEBRITIES_SEED).fill(null);

for (let i = 0; i < celebritiesData.length; i++) {
  celebritiesData[i] = {
    name: faker.name.findName(),
    occupation: faker.name.jobTitle(),
    catchPhrase: faker.company.catchPhrase()
  };
}

module.exports = celebritiesData;

const {
  withDbConnection,
  dropIfExists
} = require("../withDBConnection.js");
const celebrity = require("../models/celebrity");


withDbConnection(async () => {
  await dropIfExists(celebrity);
  await celebrity.create([{
      cName: "Albert Einstein",
      cOccupation: "Scientist",
      cCatchPhrase: "I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself."
    },
    {
      cName: "Coco Chanel",
      cOccupation: "Designer",
      cCatchPhrase: "Success is most often achieved by those who don’t know that failure is inevitable."
    },
    {
      cName: "Lady Gaga",
      cOccupation: "Singer",
      cCatchPhrase: "I'm obsessively opposed to the typical."
    }

  ]);
});
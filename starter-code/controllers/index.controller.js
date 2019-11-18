const Product = require("../models/Celebrity");


exports.celebrityList = (req, res) => {
  const { loggedUser } = req.app.locals;
  const { q } = req.query;
  let query = {};
  const regex = { $regex: q, $options: "i" };
  if (q) {
    query = {
      $or: [{ name: regex }, { description: regex }]
    };
  }
  Product.find(query)
    .then(celebrity => res.render("celebrity", { celebrity, loggedUser }))
    .catch(err => console.log(err));
};
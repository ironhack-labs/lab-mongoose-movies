const routes = require(`express`).Router();
const Movie = require(`../models/Movie`);

const currentRoute = `/movies`;
const templatesPath = `movies`;
const Model = Movie;
const modelName = `movie`;

// CREATE
routes.get(`/new`, (req, res) => {
  const data = {
    title: `Create a new ${modelName}`,
    action: `${currentRoute}`
  };
  res.render(`${templatesPath}/form`, data);
});

routes.post(`/`, (req, res) => {
  const { title, genre, plot } = req.body;
  const newValue = {
    title,
    genre,
    plot
  };

  Model.create(newValue)
    .then(doc => {
      console.log(`Success: ${modelName} created.`);
      res.redirect(`${currentRoute}`);
    })
    .catch(err => {
      console.log(`Error while creating a ${modelName}`, err);
      res.redirect(`${currentRoute}/new`);
    });
});

// READ
routes.get(`/`, (req, res, next) => {
  Model.find()
    .then(docs => res.render(`${templatesPath}/index`, { docs }))
    .catch(err => {
      console.log(`Error while retrieving ${modelName}`, err);
      next();
    });
});

routes.get(`/:id`, (req, res, next) => {
  const { id } = req.params;

  Model.findById(id)
    .then(doc => {
      console.log(`Retrieving the ${modelName} with id: ${id}`);

      res.render(`${templatesPath}/show`, { doc });
    })
    .catch(err => {
      console.log(`Error while retrieving a ${modelName}`, err);
      next();
    });
});

// UPDATE
routes.get(`/:id/edit`, (req, res, next) => {
  const { id } = req.params;

  Model.findById(id)
    .then(doc => {
      const data = {
        action: `${currentRoute}/${id}`,
        title: `Update a ${modelName}`,
        doc
      };

      res.render(`${templatesPath}/form`, data);
    })
    .catch(err => {
      console.log(
        `There was an error while retrieving ${modelName} with id: ${id}`,
        err
      );
      next();
    });
});

routes.post(`/:id`, (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  const updatedValue = {
    title,
    genre,
    plot
  };

  Model.findByIdAndUpdate(id, updatedValue, { new: true })
    .then(doc => {
      res.redirect(`${currentRoute}`);
    })
    .catch(err => {
      console.log(
        `There was an error while updating ${modelName} with id: ${id}`,
        err
      );
      next();
    });
});

// REMOVE
routes.post(`/:id/delete`, (req, res, next) => {
  const { id } = req.params;

  Model.findByIdAndDelete(id)
    .then(doc => {
      console.log(`Removing the ${modelName} with id: ${id}`);
      res.redirect(`${currentRoute}`);
    })
    .catch(err => {
      console.log(`Error while removing a ${modelName}`, err);
      next();
    });
});

module.exports = routes;

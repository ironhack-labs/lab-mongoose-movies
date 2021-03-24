//import Model
const CelebrityModel = require('../model/Celebrity.model');

class CelebrityController {
  static async getAllCelebrities(req, res) {
    try {
      const result = await CelebrityModel.find()

      res.send(result);
    } catch (error) {
      console.log({ errorGetAllCelebrities: error })
    }
  }

  static async getCelebrityById(req, res) {
    const { celebrityId } = req.params

    try {

      const results = await CelebrityModel.findById(celebrityId)

      return req.options ? { ...results._doc } : res.send(results);
    } catch (error) {
      console.log({ errorGetCelebrityById: error })
    }
  }

  static async getCreateCelebrity(req, res) {
    try {
      res.render('formCelebrity');
    } catch (error) {
      console.log({ errorGetCreateCelebrity: error })
    }
  }

  static async postNewCelebrity(req, res) {
    const { celebrityName, celebrityOccupation, celebrityCatchPhrase } = req.body;

    const newCelebrity = {
      name: celebrityName,
      occupation: celebrityOccupation,
      catchPhrase: celebrityCatchPhrase
    }

    try {
      await CelebrityModel.create(newCelebrity);

      res.redirect('/celebrities');
    } catch (error) {
      console.log({ errorPostNewCelebrity: error })
    }
  }

  static async deleteClebrityById(req, res) {
    const { celebrityId } = req.params

    try {
      await CelebrityModel.findByIdAndRemove(celebrityId);

      res.redirect('/celebrities')
    } catch (error) {
      console.log({ errorDeleteCelebritybyId: error })
    }
  }

  static async getEditCelebrity(req, res) {
    req.options = {
      ...req.params
    };

    try {
      const response = await CelebrityController.getCelebrityById(req);

      res.render('editCelebrity', { celebrity: response })
    } catch (error) {
      console.log({ errorGetEditCelebrity: error })
    }
  }

  static async postEditCelebrity(req, res) {
    const { celebrityId } = req.params;
    const { celebrityName, celebrityOccupation, celebrityCatchPhrase } = req.body;

    try {
      await CelebrityModel.findByIdAndUpdate(celebrityId, {
        name: celebrityName,
        occupation: celebrityOccupation,
        catchPhrase: celebrityCatchPhrase
      })

      res.redirect(`/celebrities/${celebrityId}`)
    } catch (error) {
      console.log({ errorPostEditCelebrity: error })
    }
  }
}

module.exports = CelebrityController;


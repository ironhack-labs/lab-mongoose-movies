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

      res.send(results);
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

      res.redirect('/celebrity');
    } catch (error) {
      console.log({ errorPostNewCelebrity: error })
    }
  }

  static async deleteClebrityById(req, res) {
    const { celebrityId } = req.params

    try {
      await CelebrityModel.findByIdAndRemove(celebrityId);

      res.redirect('/celebrity')
    } catch (error) {
      console.log({ errorDeleteCelebritybyId: error })
    }
  }
}

module.exports = CelebrityController;


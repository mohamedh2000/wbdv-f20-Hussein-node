const quizzesModel = require('../models/quizzes/quizzes.models.server')

const findAllQuizzes = () => {return quizzesModel.find()}
const findQuizById = (quizId) => {return quizzesModel.findById(quizId)};

module.exports = {findAllQuizzes, findQuizById}
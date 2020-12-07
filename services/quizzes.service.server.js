const quizzesDao = require('../daos/quizzes.dao.server')

const findAllQuizzes = () => {return quizzesDao.findAllQuizzes()}
const findQuizById = (qid) => {return quizzesDao.findQuestionsById(qid) }

module.exports = { findAllQuizzes, findQuizById }
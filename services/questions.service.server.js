const questionsDao = require('../daos/questions.dao.server')

const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (qid) => {console.log(qid); return questionsDao.findQuestionsForQuiz(qid)}

module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }
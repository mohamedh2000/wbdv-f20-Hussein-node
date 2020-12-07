const questionsModel = require('../models/questions/questions.models.server')
const quizzesModel = require('../models/quizzes/quizzes.models.server')
const {ObjectId} = require('mongodb').ObjectID;

const findAllQuestions = () => {return questionsModel.find()}
const findQuestionById = (qid) => {return questionsModel.findById(qid)}
const findQuestionsForQuiz = (qid) => {    
        return questionsModel.find({quizId: qid})
                                .then(quiz => {console.log(quiz); return quiz})
}
module.exports = {findAllQuestions, findQuestionById, findQuestionsForQuiz}
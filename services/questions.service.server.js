let questions = require('./questions.json')

findQuestionsForQuiz = (qid) => 
    {
        return questions.filter(question => question.quizId === qid)
    }

module.exports = {
    findQuestionsForQuiz
}
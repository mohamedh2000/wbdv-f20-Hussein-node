let quizzes = require('./quizzes.json')

const findAllQuizzes = () => {
    console.log(quizzes)    
    return quizzes} 
const findQuizById = (qid) => {
    return quizzes.find(quiz => quiz._id === qid)
}

module.exports = {
    findAllQuizzes,
    findQuizById
}
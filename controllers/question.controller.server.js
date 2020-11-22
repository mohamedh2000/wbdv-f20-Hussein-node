const questionService
    = require("../services/questions.service.server")
module.exports = (app) => {
    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid']
        console.log(req.params)
        const questions = questionService.findQuestionsForQuiz(quizId)
        console.log(questions)
        res.send(JSON.stringify(questions))
    }
    app.get("/api/quizzes/:qid/questions",
        findQuestionsForQuiz)
}

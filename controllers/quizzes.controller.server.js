
const quizService = require('../services/quiz.service.server.js')

module.exports = (app) => {
    app.get('/api/quizzes', (req, res) => {
        console.log("im in here")
        let quizzes = quizService.findAllQuizzes()
        console.log(quizzes)
        return res.send(JSON.stringify(quizzes))
    })

    app.get('/api/quizzes/:qid', (req, res) => {
        qid = req.params.qid
        res.send(JSON.stringify(quizService.findQuizById(qid)))
    })
}






var express = require('express');
var app = express(); 

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", 'http://localhost:4200');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
})

require('./controllers/quizzes.controller.server.js')(app)
require('./controllers/question.controller.server.js')(app)
require('./controllers/quiz-attempts.controller.server.js')(app)

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/hello', (req, res) => {
    res.send('hello world');
});

app.listen(3000);
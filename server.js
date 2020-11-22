var express = require('express');
var app = express(); 

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", 'http://localhost:4200');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
})

app.get('/hello', (req, res) => {
    res.send('hello world');
});

require('./controllers/quizzes.controller.server')(app)
require('./controllers/question.controller.server')(app)

app.listen(3000);
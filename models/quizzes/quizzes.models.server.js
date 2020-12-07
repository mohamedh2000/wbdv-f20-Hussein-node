
const mongoose = require('mongoose');
const databaseName = 'whiteboard';
var connectionString = 'mongodb://localhost/' + databaseName;
mongoose.connect(connectionString, {useNewUrlParser:true});

const quizSchema = require('./quizzes.schema.server.js')
const quizModel = mongoose.model(
    'QuizModel',
    quizSchema
)
module.exports = quizModel
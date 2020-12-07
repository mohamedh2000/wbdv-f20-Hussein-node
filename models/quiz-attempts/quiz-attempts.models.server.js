
const mongoose = require('mongoose');
const databaseName = 'whiteboard';
var connectionString = 'mongodb://localhost/' + databaseName;
mongoose.connect(connectionString, {useNewUrlParser:true});

const quizAttemptSchema = require('./quiz-attempts.schema.server')
const quizAttemptModel = mongoose.model(
    'QuizAttemptModel',
    quizAttemptSchema
)
module.exports = quizAttemptModel
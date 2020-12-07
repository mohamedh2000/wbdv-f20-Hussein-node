
const mongoose = require('mongoose');
const databaseName = 'whiteboard';
var connectionString = 'mongodb://localhost/' + databaseName;
mongoose.connect(connectionString, {useNewUrlParser:true});

const questionsSchema = require('./questions.schema.server')
const questionsModel = mongoose.model(
    'QuestionsModel',
    questionsSchema
)

module.exports = questionsModel
const express = require('express');
const app = express();
const sequelize = require('./src/config/database');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 4100;

const Evaluation = require('./src/models/evaluationModel')
const Quizz = require('./src/models/quizzModel')
const QuizzType = require('./src/models/quizzTypeModel')
const Course = require('./src/models/courseModel');
const Module = require('./src/models/moduleModel');

Evaluation.hasOne(Quizz, {
  foreignKey: 'evaluation_id'
})
QuizzType.hasOne(Quizz, {
  foreignKey: 'quizz_type'
})
Course.hasOne(Module, {
  foreignKey: 'course_id',
})
Quizz.belongsTo(Evaluation, {
  foreignKey: 'evaluation_id'
})
Quizz.belongsTo(QuizzType, {
  foreignKey: 'quizz_type'
})
Module.belongsTo(Course, {
  foreignKey: 'course_id'
})

app.use(cors())
app.use(express.json());

app.use('/courses', require('./src/routes/courseRoutes'));
app.use('/modules', require('./src/routes/moduleRoutes'));
app.use('/evaluations', require('./src/routes/evaluationRoutes'));
app.use('/quizzes', require('./src/routes/quizzRoutes'));
app.use('/custom', require('./src/routes/customAdminRoutes'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT} 🚀`);
});

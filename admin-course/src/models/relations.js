const Evaluation = require('./evaluationModel')
const Quizz = require('./quizzModel')
const QuizzType = require('./quizzTypeModel')
const Course = require('./courseModel');
const Module = require('./moduleModel');
const CourseStudent = require('./courseStudent');
const User = require('./userModel')

//una evaluacion tiene varias preguntas 
Evaluation.hasMany(Quizz, {
    foreignKey: 'evaluation_id',
    as: 'questions',
})

Quizz.belongsTo(Evaluation, {
    foreignKey: 'evaluation_id',
    as: 'evaluation',
});

//un tipo de quizz tiene varias preguntas
QuizzType.hasMany(Quizz, {
    foreignKey: 'quizz_type',
    as: 'questions',
});

Quizz.belongsTo(QuizzType, {
    foreignKey: 'quizz_type',
    as: 'quizzType',
});

//un curso tiene varios modulos
Course.hasMany(Module, {
    foreignKey: 'course_id',
    as: 'modules',
});

Module.belongsTo(Course, {
    foreignKey: 'course_id',
    as: 'course',
});

//un usuario tiene varias sesiones


//un usuario tiene varios cursos
User.belongsToMany(Course, {
    through: { model: CourseStudent, unique: false },
    foreignKey: 'user_id',
    otherKey: 'course_id',
});

Course.belongsToMany(User, {
    through: { model: CourseStudent, unique: false },
    foreignKey: 'user_id',
    otherKey: 'course_id',
});

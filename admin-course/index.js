const express = require('express');
const app = express();
const sequelize = require('./src/config/database');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 4100;

app.use(cors())
app.use(express.json());

app.use('/courses', require('./src/routes/courseRoutes'));
app.use('/modules', require('./src/routes/moduleRoutes'));
app.use('/evaluations', require('./src/routes/evaluationRoutes'));

app.use('/quizzes', require('./src/routes/quizzRoutes'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
  
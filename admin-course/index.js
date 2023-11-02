const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 4100;
const jwt = require('jsonwebtoken')

const SocketService = require('./src/services/socketService');
require('./src/models/relations')
require('dotenv').config();


app.use(cors())
app.use(express.json());

app.use('/api/courses', require('./src/routes/courses/courseRoutes'));
app.use('/api/modules', require('./src/routes/courses/moduleRoutes'));
app.use('/api/evaluations', require('./src/routes/courses/evaluationRoutes'));
app.use('/api/quizzes', require('./src/routes/courses/quizzRoutes'));
app.use('/api/custom', require('./src/routes/courses/customAdminRoutes'));

app.use('/api/users', require('./src/routes/users/userRoutes'))
app.use('/api/profiles', require('./src/routes/users/profileRoutes'))

app.use('/coursestudent', require('./src/routes/courses/courseStudentRoutes'));

SocketService(server);

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT} \nhttp://localhost:4100/ 🚀`);
});

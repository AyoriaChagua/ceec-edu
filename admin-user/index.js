const express = require('express');
const app = express();
const sequelize = require('./src/config/database');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 4500;
const User = require('./src/models/userModel')
const Profile = require('./src/models/profileModel')
const DocumentType = require('./src/models/documentTypeModel')

DocumentType.hasOne(Profile, { foreignKey: 'document_id'})
User.hasOne(Profile, { foreignKey: 'user_id' });
Profile.belongsTo(User, { foreignKey: 'user_id' });
Profile.belongsTo(DocumentType, {foreignKey: 'document_id'})

app.use(cors())
// Middleware para procesar solicitudes JSON
app.use(express.json());

// Rutas de usuario
app.use('/users', require('./src/routes/userRoutes'));
//Rutas perfil
app.use('/profiles', require('./src/routes/profileRoutes'));



app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

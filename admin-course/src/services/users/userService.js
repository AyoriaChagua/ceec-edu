// userService.js
const User = require('../../models/userModel');
const bcrypt = require('bcrypt');
const fetch = require('node-fetch');

async function createUser(userData) {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    return User.create(userData);
  } catch (error) {
    throw new Error('Error al crear el usuario');
  }
}




async function getUserById(userId) {
  return User.findByPk(userId);
}

async function updateUser(userId, userData) {
  return User.update(userData, { where: { user_id: userId } });
}

async function deleteUser(userId) {
  return User.destroy({ where: { user_id: userId } });
}

async function getAllUsers() {
  return User.findAll();
}


module.exports = { createUser, getUserById, updateUser, deleteUser, getAllUsers   };
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const AppSession = require('../models/appSessionModel');
require('dotenv').config();

const activeUsers = new Map();
const SocketService = (server) => {

    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log('Usuario conectandose');
        socket.on('login', (data) => {
            try {
                const decoded = jwt.decode(data.token, process.env.JWT_SECRET)
                const id = decoded.id;
                const loginTime = decoded.loginTime;
                
                if(id){
                    console.log(`El usuario con id ${id} se conectó a las ${loginTime}`)
                    activeUsers.set(socket.id, id);
                    console.log(activeUsers)
                    console.log(Array.from(activeUsers.values()))
                    io.emit('active-users', Array.from(activeUsers.values()));
                }

                
            } catch (error) {
                console.error('Error en la autenticación', error);
                socket.disconnect(true)
            }
            
        });
        socket.on('logout', () => {
            console.log('Usuario desconectado');
            activeUsers.delete(socket.id);
            io.emit('active-users', Array.from(activeUsers.values()));
        });
        socket.on('disconnect', () => {
            console.log('Usuario desconectado');
            activeUsers.delete(socket.id);
            io.emit('active-users', Array.from(activeUsers.values()));
        });
    });
    return io;
}

module.exports = SocketService;

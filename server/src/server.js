import http from 'http'
import { Server } from 'socket.io'
import { app } from './app.js'
import { handleChatEvents } from './socket/chatEvents.js'

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGN.split(',')
  }
})

const userConnections = {}

io.on('connection', (socket) => {
  const currentUser = socket.handshake.query.username
  console.log(`CONNECTED username: ${currentUser}, socketid: ${socket.id}`)

  // ek user ek se jyada device se connect kar sakta hai
  if (userConnections[currentUser]) {
    userConnections[currentUser].push(socket.id)
  } else {
    userConnections[currentUser] = [socket.id]
  }
  console.log(`All connections for ${currentUser}: ${userConnections[currentUser]}`)

  handleChatEvents(socket, currentUser, userConnections)

  // jab socket disconnect ho jaaye
  socket.on('disconnect', () => {
    console.log(`DISCONNECTED username: ${currentUser}, socketid: ${socket.id}`)

    userConnections[currentUser] = userConnections[currentUser].filter(id => id !== socket.id)
    if (userConnections[currentUser].length === 0) {
      delete userConnections[currentUser];
    }
    console.log(`Remaining connections for ${currentUser}: ${userConnections[currentUser]}`);
  })
})

export { server }
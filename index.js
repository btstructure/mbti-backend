const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("mbti-personality.json")
const router2 = jsonServer.router("questions.json")
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3001
const port2 = process.env.PORT || 3002

server.use(middlewares)
server.use(router)
server.use(router2)
server.listen(port)
server.listen(port2)
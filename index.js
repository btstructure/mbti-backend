const jsonServer = require("json-server")


const server1 = jsonServer.create()
const router1 = jsonServer.router("mbti-personality.json")
const middlewares = jsonServer.defaults()
const port1 = process.env.PORT || 3001

server1.use(middlewares)
server1.use(router1)
server1.listen(port1, () => {
    console.log(`Server is running on port ${port1}`)
})


const server2 = jsonServer.create()
const router2 = jsonServer.router("questions.json")
const middlewares2 = jsonServer.defaults()
const port2 = process.env.PORT || 3002



server2.use(middlewares2)
server2.use(router2)
server2.listen(port2, () => {
    console.log(`Server is running on port ${port2}`)
})
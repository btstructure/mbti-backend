const jsonServer = require("json-server");
const server1 = jsonServer.create();
const server2 = jsonServer.create();
const router1 = jsonServer.router("mbti-personality.json");
const router2 = jsonServer.router("questions.json");
const middlewares = jsonServer.defaults();
const port1 = process.env.PORT_1 || 3001;
const port2 = process.env.PORT_2 || 3002;

server1.use(middlewares);
server1.use("/personality", router1);
server1.listen(port1, () => {
  console.log(`Server 1 is running on port ${port1}`);
});

server2.use(middlewares);
server2.use("/questions", router2);
server2.listen(port2, () => {
  console.log(`Server 2 is running on port ${port2}`);
});
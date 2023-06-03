const jsonServer = require("json-server");
const server1 = jsonServer.create();
const server2 = jsonServer.create();
const router1 = jsonServer.router("mbti-personality.json");
const router2 = jsonServer.router("questions.json");
const middlewares = jsonServer.defaults();
const port1 = process.env.PORT_1 || 3001;
const port2 = process.env.PORT_2 || 3002;

// Server 1
server1.use("/personality", router1); // Use "/personality" as the base URL for router1
server1.use(middlewares);

// Server 2
server2.use("/questions", router2); // Use "/questions" as the base URL for router2
server2.use(middlewares);

// Start both servers
Promise.all([
  new Promise((resolve, reject) => {
    server1.listen(port1, () => {
      console.log(`Server 1 is running on port ${port1}`);
      resolve();
    });
  }),
  new Promise((resolve, reject) => {
    server2.listen(port2, () => {
      console.log(`Server 2 is running on port ${port2}`);
      resolve();
    });
  })
])
  .then(() => {
    console.log("Both servers are running.");
  })
  .catch((error) => {
    console.error("Error starting servers:", error);
  });
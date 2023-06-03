const jsonServer = require('json-server');
const server = jsonServer.create();
const router1 = jsonServer.router('mbti-personality.json');
const router2 = jsonServer.router('questions.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use('/personality', router1);
server.use('/questions', router2);

server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
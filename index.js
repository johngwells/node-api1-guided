const express = require('express');
const shortid = require('shortid');

const server = express();

let hubs = [];
let lessons = [];

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Running'});
});

server.get('/hello', (req, res) => {
  res.status(200).json({ hello: 'Web 27'});
});

server.post('/api/hubs', (req, res) => {
  // axios.post{/api/hubs, data} <-- the data shows up as the req.body on the server
  const hubInfo = req.body;

  // library to generate unique ID's
  hubInfo.id = shortid.generate();

  hubs.push(hubInfo);

  res.status(201).json(hubInfo);
});

server.post('/api/lessons', (req, res) => {
  const lessonInfo = req.body;

  lessonInfo.id = shortid.generate();

  lessons.push(lessonInfo);

  res.status(201).json(lessonInfo);
});

const PORT = 5000;
server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} ** \n`));

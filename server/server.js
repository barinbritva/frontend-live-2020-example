const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

function readFile(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeFile(filePath, data) {
  return fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

function addRouteHandlers(app) {
  app.get('/api/facebook/get-all', function (req, res) {
    const data = readFile(path.join(__dirname, './data/facebook.json'));

    res.json(data);
  })

  app.get('/api/facebook/like', function (req, res) {
    const file = path.join(__dirname, './data/facebook.json')
    const data = readFile(file);

    data[0].likesAmount++;
    writeFile(file, data);

    res.json(data[0]);
  })

  app.get('/api/facebook/repost', function (req, res) {
    const file = path.join(__dirname, './data/facebook.json')
    const data = readFile(file);

    data[0].repostsAmount++;
    writeFile(file, data);

    res.json(data[0]);
  })

  app.post('/api/facebook/comment', function (req, res) {
    const file = path.join(__dirname, './data/facebook.json')
    const data = readFile(file);
    const payload = req.body;

    const postToUpdate = data.find((post) => {
      return post.id === payload.post.id
    })

    if (postToUpdate == null) {
      return res.status(401).send('Unprocessable entity.');
    }

    postToUpdate.comments.unshift(payload.comment);
    writeFile(file, data);

    console.log(postToUpdate)

    res.json(postToUpdate);
  })

  app.post('/api/facebook/like', function (req, res) {
    const file = path.join(__dirname, './data/facebook.json')
    const data = readFile(file);
    const payload = req.body;

    const postToUpdate = data.find((post) => {
      return post.id === payload.post.id
    })

    if (postToUpdate == null) {
      return res.status(401).send('Unprocessable entity.');
    }

    postToUpdate.likesAmount++
    writeFile(file, data);

    console.log(postToUpdate)

    res.json(postToUpdate);
  })

  app.post('/api/facebook/repost', function (req, res) {
    const file = path.join(__dirname, './data/facebook.json')
    const data = readFile(file);
    const payload = req.body;

    const postToUpdate = data.find((post) => {
      return post.id === payload.post.id
    })

    if (postToUpdate == null) {
      return res.status(401).send('Unprocessable entity.');
    }

    postToUpdate.repostsAmount++
    writeFile(file, data);

    console.log(postToUpdate)

    res.json(postToUpdate);
  })
}

function startServer(port, callback) {
  const app = express();

  app.set('port', port);
  app.use('/', express.static(path.join(__dirname, '../public')));
  app.use(bodyParser.json())
  addRouteHandlers(app);

  const server = app.listen(app.get('port'));

  server.on('error', (error) => {
    console.error('Server error.', error);
    callback(error);
  });

  server.on('listening', () => {
    console.info(`Server running on port ${app.get('port')}.`);
    callback();
  });

  server.on('close', () => {
    console.info('Server stopped.');
  });

  return server;
}

startServer(3000, (error) => {
  if (error) {
    process.exit(1);
  }
});

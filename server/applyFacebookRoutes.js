const path = require('path');
const {readFile, writeFile} = require('./fileHelper');

const dataFilePath = path.join(__dirname, './data/facebook.json');
const urlPrefix = '/api/facebook';

module.exports = function applyFacebookRoutes(app) {
  app.get(`${urlPrefix}/get-all`, function (req, res) {
    const data = readFile(dataFilePath);

    res.json(data);
  })

  app.post(`${urlPrefix}/comment`, function (req, res) {
    const file = dataFilePath;
    const data = readFile(file);
    const payload = req.body;

    const postToUpdate = data.find((post) => {
      return post.id === payload.post.id;
    })

    if (postToUpdate == null) {
      return res.status(401).send('Unprocessable entity.');
    }

    postToUpdate.comments.unshift(payload.comment);
    writeFile(file, data);

    res.json(postToUpdate);
  })

  app.post(`${urlPrefix}/like`, function (req, res) {
    const file = dataFilePath;
    const data = readFile(file);
    const payload = req.body;

    const postToUpdate = data.find((post) => {
      return post.id === payload.post.id;
    })

    if (postToUpdate == null) {
      return res.status(401).send('Unprocessable entity.');
    }

    postToUpdate.likesAmount++;
    writeFile(file, data);

    res.json(postToUpdate);
  })

  app.post(`${urlPrefix}/repost`, function (req, res) {
    const file = dataFilePath;
    const data = readFile(file);
    const payload = req.body;

    const postToUpdate = data.find((post) => {
      return post.id === payload.post.id;
    })

    if (postToUpdate == null) {
      return res.status(401).send('Unprocessable entity.');
    }

    postToUpdate.repostsAmount++;
    writeFile(file, data);

    res.json(postToUpdate);
  })
}

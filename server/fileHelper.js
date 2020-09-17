const fs = require('fs');

module.exports = {
  readFile: function readFile(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  },
  writeFile: function writeFile(filePath, data) {
    return fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }
}

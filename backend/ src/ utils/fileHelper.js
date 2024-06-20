const fs = require('fs');
const path = require('path');

const saveFile = (file, directory) => {
  const filePath = path.join(directory, file.name);
  file.mv(filePath, (err) => {
    if (err) {
      throw err;
    }
    console.log(`File saved to ${filePath}`);
  });
};

const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      throw err;
    }
    console.log(`File deleted from ${filePath}`);
  });
};

module.exports = {
  saveFile,
  deleteFile
};

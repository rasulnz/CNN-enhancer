const shellJs = require("shelljs");

const handleUpload = (file, body) => {

    console.log(file);

    return new Promise(resolve => {
        resolve(true);
    });
};

module.exports = {
    handleUpload
};
const shellJs = require("shelljs");

const handleUpload = (file) => {

    console.log(file);

    return new Promise(resolve => {
        resolve(true);

        // const execStr = `enhance --zoom=2 --mode=default --type=photo ../public/${file.filename}`;const execStr = `ls`;
        shellJs.exec(execStr);
    });
};

module.exports = {
    handleUpload
};

const fs = require('fs');


// 读取文件
function readFile(fileUrl){
    return new Promise((resolve, reject) => {
        fs.readFile(fileUrl, 'utf-8', (err, data) => {
            if(err) reject(err);
            else resolve(data);
        });
    });
}

// 写入文件
function writeFile(fileUrl, data){
    return new Promise((resolve, reject) => {
        fs.writeFile(fileUrl, data, 'utf-8', (err) => {
            if(err) reject(err);
            else resolve();
        });
    });
}

module.exports = {
    writeFile,
    readFile
}


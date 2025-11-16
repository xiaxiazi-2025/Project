const path = require("path");

const fullPath = '/hostname/2023/02.txt';
const fileName = path.basename(fullPath);
const fileExt = path.extname(fullPath);
console.log(fileName)
const path = require('path')
const fs = require('fs')
// filePath1 = path.join('src','files','01.txt')
// console.log(filePath1)

// filePath2 = path.join('src','files','../','01.txt')
// console.log(filePath2)

filePath3 = path.join(__dirname,'src','files','../','01.txt')
console.log(filePath3)
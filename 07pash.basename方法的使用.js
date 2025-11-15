//引入 Node.js 内置的 path 模块处理文件路径的工具模块
const path = require('path')
//定义一个变量 fpath,存储文件路径
const fpath = '/a/b/c/index.html'
//调用 path 模块的 basename 方法，传入路径 fpath
path.basename(fpath)
const fullName = path.basename(fpath,'.html')
console.log(fullName)
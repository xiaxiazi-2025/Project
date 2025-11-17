const http = require('http')
const server = http.createServer((req,res) => {res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.end('hello node.js HTTP 服务器！');
});
server.listen(3000, () => {
    console.log('服务器启动成功！可访问：http://localhost:3000');
});
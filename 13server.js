const http = require('http')
const fs = require('fs')
const path = require('path');
const server = http.createServer((req,res) => {
    let url = req.url;
    if(url === '/') {
        url = 'index.html';
    }
    const filePath = path.join(__dirname,url);
    fs.readFile(filePath,(err,data) => {
        if (err) {
            res.writeHead(404,{'Content-Type':'text/plain;charset=utf-8'});
            res.end('文件不存在：' + url)
        }else{
            if(url.endsWith('.html')) {
                res.setHeader('Content-Type','text/html;charset=utf-8');
            }else if (url.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css; charset=utf-8');
      } else if (url.endsWith('.js')) {
        res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      }

      // 返回文件内容
      res.end(data);
    }
  });
});
server.listen(3000, () => {
    console.log('服务器启动成功！可访问：http://localhost:3000');
});
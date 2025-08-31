//1. 导入 http 模块
const http = require('http');

//2. 创建服务对象
const server = http.createServer((request, response) => {
  // response.end('Hello HTTP'); //设置响应体
  response.setHeader('content-type', 'text/html;charset=utf-8');//响应头，把字符集为utf-8来解析

  response.end('你好'); //设置响应体，并结束响应
});

//3. 监听端口, 启动服务，http请求默认走80端口，如果写的端口号为80，那么在浏览器输入地址时不用加端口号了，https的默认端口号为443
server.listen(9000, () => {
  console.log('服务已经启动....')
});

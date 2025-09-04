//导入 http 模块
const http = require('http');

//创建服务对象
const server = http.createServer((request, response) => {
  //1. 设置响应状态码
  // response.statusCode = 203;
  // response.statusCode = 404;
  //2. 响应状态的描述 
  // response.statusMessage = 'iloveyou';
  //3. 响应头,设置字符集和服务器信息
  // response.setHeader('content-type', 'text/html;charset=utf-8');
  // 设置服务器信息，响应的服务器名称
  // response.setHeader('Server', 'Node.js');
  // 设置自定义的响应头中服务器内容及名称
  // response.setHeader('myHeader', 'test test test');
  // 设置多个同名的响应头
  // response.setHeader('test', ['a','b','c']);
  //4. 响应体的设置，一般在write里面设置了响应体后，就不再end里面设置别的内容了
  response.write('love');
  response.write('love');
  response.write('love');
  response.write('love');
  // end响应体一次只能设置一个，否则会报错
  response.end('love'); //设置响应体
  response.end('xxx'); //设置响应体
});

//监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
});

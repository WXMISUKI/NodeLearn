//导入 http 模块
const http = require('http');
const fs = require('fs');

//创建服务对象
const server = http.createServer((request, response) => {
  //读取文件内容，同步读取，并用绝对路径防止跨目录访问，__dirname就是指示当前文件所在目录
  let html = fs.readFileSync(__dirname + '/10_table.html');
  // end传递的参数可以是字符串也可以是buffer，buffer就是由字节组成的数组
  response.end(html); //设置响应体

  // 错误 10_table.js:1 Uncaught SyntaxError: Unexpected token '<' 表明浏览器在尝试加载 JavaScript 文件时，实际接收到的是 HTML 内容。这是因为你的服务器代码只返回 HTML 文件，不管请求的是什么文件（HTML、CSS 或 JS），都返回相同的 HTML 内容。
});

//监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
});

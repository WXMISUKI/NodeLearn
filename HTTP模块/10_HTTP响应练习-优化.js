//导入 http 模块
const http = require('http');
const fs = require('fs');

//创建服务对象
const server = http.createServer((request, response) => {
  //读取文件内容，同步读取，并用绝对路径防止跨目录访问，__dirname就是指示当前文件所在目录
  let html = fs.readFileSync(__dirname + '/10_table.html');
  // end传递的参数可以是字符串也可以是buffer，buffer就是由字节组成的数组
  response.end(html); //设置响应体
});

//监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
});

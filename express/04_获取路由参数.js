//导入 express
const express = require('express');

//创建应用对象
const app = express();

//创建路由
// app.get('/100037199931.html', (req, res) => {
//   res.setHeader('Content-Type', 'text/html; charset=utf-8');
//   res.end('商品详情');
// });
app.get('/:id.html', (req, res) => {
  // 获取路由参数params里面的id是上方get里面对应的
  console.log(req.params.id);
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('商品详情');
});
//监听端口, 启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口 3000 正在监听中....')
})
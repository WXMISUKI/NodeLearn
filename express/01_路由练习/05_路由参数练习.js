//导入 express
const express = require('express');
const fs = require('fs');
const path = require('path');

//导入歌手数据
const singersData = require('./singers.json');

//创建应用对象
const app = express();

// 根据请求的id，返回歌手详情即对应的姓名和图片
app.get('/singer/:id.html', (req, res) => {
  // 获取路由参数params里面的id是上方get里面对应的
  const singerId = parseInt(req.params.id);
  
  // 在歌手数据中查找匹配的歌手
  const singer = singersData.singers.find(item => item.id === singerId);
  
  // 如果找不到对应的歌手，返回404
  if (!singer) {
    res.status(404).send('<h1>歌手不存在</h1>');
    return;
  }
  
  // 读取HTML模板文件
  const htmlTemplatePath = path.join(__dirname, 'singerDetail.html');
  let html = fs.readFileSync(htmlTemplatePath, 'utf-8');
  
  // 使用全局正则表达式替换HTML中的占位符为实际的歌手信息,除了用正则，也可以用replaceall替换
  html = html.replace(/\{\{singer_pic\}\}/g, singer.singer_pic);
  html = html.replace(/\{\{singer_name\}\}/g, singer.singer_name);
  html = html.replace(/\{\{other_name\}\}/g, singer.other_name || '无');
  html = html.replace(/\{\{singer_id\}\}/g, singer.singer_id);
  
  // 设置响应头
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // 返回渲染后的HTML
  res.end(html);
});

// 监听端口, 启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口 3000 正在监听中....');
});
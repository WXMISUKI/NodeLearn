//1. 引入 fs 模块
const fs = require('fs');

// //2. 调用 appendFile
// fs.appendFile('./座右铭.txt', ',无人扶我青云志，我自踏雪至山巅', err => {
//   //判断
//   if(err){
//     console.log('追加写入失败~~');
//     return;
//   }
//   console.log('追加写入成功');
// });

// 换行追加写入\r\n
// fs.appendFileSync('./座右铭.txt', '\r\n温故而知新, 可以为师矣')

//writeFile 实现追加写入 ，第三个参数是配置对象，flag: 'a' 表示追加写入
// flag：模式，a：append，w：write，r：read
fs.writeFile('./座右铭.txt', 'love love love',{flag: 'a'}, err => {
  if(err) {
    console.log('写入失败~');
    return ;
  }
  console.log('写入成功');
});
//1. 引入 fs 模块
const fs = require('fs');

//2. 异步读取,err错误对象,data读取到的数据内容
// fs.readFile('./观书有感.txt', (err, data) => {
//   if(err) {
//     console.log('读取失败~~');
//     return;
//   }
// //   默认得到的data是buffer类型,需要转换为字符串才能打印出来

//   console.log(data.toString());
// });

//3. 同步读取
let data = fs.readFileSync('./观书有感.txt');


console.log(data.toString());
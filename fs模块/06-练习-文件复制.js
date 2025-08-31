/**
 * 需求:
 *   复制『resource』文件夹下的『笑看风云.mp4』
 */
const fs = require('fs');
const process = require('process');

//方式一 readFile
//读取文件内容
// let data = fs.readFileSync('../resource/笑看风云.mp4');
// //写入文件
// fs.writeFileSync('../resource/笑看风云-2.mp4', data);
// console.log(process.memoryUsage()); // rss    110710784 字节   105MB

//方式二 流式操作
//创建读取流对象
const rs = fs.createReadStream('../resource/笑看风云.mp4');
//创建写入流对象
const ws = fs.createWriteStream('../resource/笑看风云-3.mp4');

//绑定 data 事件
// rs.on('data', chunk => {
//   ws.write(chunk);
// });

// rs.on('end', () => {
//   console.log(process.memoryUsage());  // 52113408 字节  =>  49.6M
// })
// 管道流操作，读取流对象和写入流对象之间建立管道，数据自动从读取流对象进入写入流对象
rs.pipe(ws);



/**
 * 观书有感.txt
 */
//1. 导入 fs 
const fs = require('fs');

//2. 创建写入流对象 
const ws = fs.createWriteStream('./观书有感.txt');

//3. write
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');

// fs.appendFile('./座右铭.txt', '\r\n当需要持久化保存数据时，应该要想到文件写入', err=>{
//     if(err){
//         console.log('追加写入失败~~');
//         return;
//     }
//     console.log('追加写入成功');
// } )

//4. 关闭通道
// ws.close();
// ws.end();
// end()和close()的区别：
// 1. close()是异步的，end()是同步的
// 2. close()可以多次调用，end()只能调用一次
// 3. close()会触发finish事件，end()不会触发finish事件
// 都是用来关闭通道的，但是end()会等待缓冲区的数据写入完成后才会关闭通道。
// 都可以注释不加，因为默认情况下，流对象会自动关闭。

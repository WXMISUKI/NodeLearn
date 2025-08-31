/*
需求：
新建文件，座右铭.txt，写入内容：须知少时凌云志，曾许人间第一流
*/
// 1.引入fs模块
const { log } = require("console");
const fs = require("fs");
// 2.写入文件
// fs.writeFile('座右铭.txt', '须知少时凌云志，曾许人间第一流', (err) => {
//     // 写入失败，err为错误对象，没有错误时，err为null
//     if (err) {
//         console.log('写入失败，'+err);
//         return;
//     } else {
//         console.log('写入成功');
//     }
// });

//同步写入,会阻塞后续代码的执行，直到写入完成才继续执行后面的代码,无回调函数，直接返回结果


fs.writeFileSync('./data.txt', '无人扶我青云志');
console.log("程序执行完毕1+1");

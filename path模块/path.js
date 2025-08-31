//导入 fs
const fs = require('fs');
const path = require('path');
//写入文件
// fs.writeFileSync(__dirname + '/index.html', 'love');
// console.log(__dirname + '/index.html');//D:\GithubStore\NodeLearn\path模块/index.html

//resolve  解决 第一个参数给绝对路径，后面参数最好是相对路径，否则会有问题
// console.log(path.resolve(__dirname, './index.html'));
// console.log(path.resolve(__dirname, 'index.html'));
// console.log(path.resolve(__dirname, '/index.html', './test'));
// D:\GithubStore\NodeLearn\path模块\index.html
// D:\GithubStore\NodeLearn\path模块\index.html
// D:\index.html\test


// sep 分隔符
// console.log(path.sep); // windows  \  Linux  /

// parse 方法  __dirname  '全局变量'
// console.log(__filename); // 文件的绝对路径
// 加\做转义
let str = 'D:\\nodeJS\\13-path\\代码\\path.js';
// console.log(path.parse(str));

// basename 文件名
// console.log(path.basename(str));

// dirname 文件夹路径
// console.log(path.dirname(str));

// extname 文件扩展名
// console.log(path.extname(str));


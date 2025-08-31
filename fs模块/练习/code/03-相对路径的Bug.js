// 
const fs = require('fs');

// 相对路径参照物: 命令行的工作目录，如果我的命令行不在当前目录，那么相对路径参照物就是当前目录的上一级目录
// fs.writeFileSync('./index.html', 'love');

//绝对路径 '全局变量' __dirname 保存的是: 所在文件的所在目录的绝对路径
// 防止文件路径写错
// console.log(__dirname);
// fs.writeFileSync(__dirname + '/index.html', 'love');



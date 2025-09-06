//导入模块  // fs 
// const tiemo = require('./me.js');

//省略后缀 JS
// const tiemo = require('./me');

//导入 JSON 文件,在文件夹中,省略了后缀,但重名,先找js后找json
// const duanzi = require('./duanzi');
// console.log(duanzi);//对象

//导入其他类型的文件,也是以js文件形式导入
const test = require('./test');

console.log(test);
// //调用函数
// tiemo();
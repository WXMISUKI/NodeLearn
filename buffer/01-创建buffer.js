// 1.alloc
let buf = Buffer.alloc(10); // 分配一个长度为10的buffer，默认填充0
// console.log(buf);

// 2.allocUnsafe
let buf2 = Buffer.allocUnsafe(10); // 不安全，可能包含（旧的内存数据）敏感数据，但是速度快，因为不用将之前没有的内存数据清空，直接使用即可。
// console.log(buf2);

// 3.from
let buf3 = Buffer.from("hello"); 
let buf4 = Buffer.from([105,108,111,118,101,121,111,117]); // 数组转buffer 结果为：iloveyou
// 转为unicode编码的存储形式
console.log(buf4);
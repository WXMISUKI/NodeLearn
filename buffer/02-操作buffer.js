// let buf4 = Buffer.from([105,108,111,118,101,121,111,117]);
// console.log(buf4);
// console.log(buf4.toString());// iloveyou 默认采用utf8编码
{/* <Buffer 69 6c 6f 76 65 79 6f 75>
iloveyou */}
// console.log(buf4.toString("utf8",0,5));

// []
// let buf = Buffer.from("hello");
// console.log(buf[0].toString(2));// 1101000 105 转为二进制字符串
// buf[0] = 100;
// console.log(buf.toString);

// 溢出
// let buf = Buffer.from("hello");
// buf[0] = 256; //舍弃高位的数字 256 = 0001 0000 0000 所以结果是 0000 0000

// console.log(buf);//<Buffer 00 65 6c 6c 6f>

//中文
let buf = Buffer.from("你好");//<Buffer e4 bd a0 e5 a5 bd> 1个中文占3个字节
console.log(buf);
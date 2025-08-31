//在node里，bom，dom，ajax不能用
// console.log(window);//undefined

// console.log(document);//undefined

// console.log(XMLHttpRequest);//undefined

// global 顶级对象 globalThis

// console.log(global);//es2020后才有的

console.log(globalThis === global);//指向同一个对象

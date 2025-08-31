const fs=require('fs');

// 读取code目录下的文件列表
const files=fs.readdirSync(__dirname+'/code');
// 遍历数组
files.forEach(file => {
//   拆分文件名
    let data=file.split('-');
    let [num, name]=data;
    if(num.length>2){
        num=num.slice(1,);
    }
    // 创建新的文件名
    let newFile=num+'-'+name;
    // console.log(newFile);
    // 重命名
    fs.renameSync(__dirname+'/code/'+file,__dirname+'/code/'+newFile);
})


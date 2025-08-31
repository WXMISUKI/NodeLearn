const fs = require("fs");

const files=fs.readdirSync(__dirname+'/code');
files.forEach((file,index)=>{
    index++;
    let data=file.split('-');
    let [num, name]=data;
    if(index<10){
        num='0'+index;
    }else{
        num=index;
    }
    let newFile=num+'-'+name;
    fs.renameSync(__dirname+'/code/'+file,__dirname+'/code/'+newFile);
})
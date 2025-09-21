//导入 db
const db = require("./db/db");
//导入 MovieModel
const MovieModel = require("./models/MovieModel");
//调用函数
db(
  () => {
    //电影的模型对象
    MovieModel.create({ title: "让子弹飞", director: "姜文" })
      .then((data) => {
        console.log("添加成功");
        console.log(data);
      })
      .catch((err) => {
        console.log("添加失败");
        console.log(err);
      });
  },
  (err) => {
    console.log("连接失败");
    console.log(err);
  }
);

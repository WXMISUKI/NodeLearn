//导入 db 文件
const db = require("./db/db");
//导入 mongoose
const mongoose = require("mongoose");
//导入 BookModel
const BookModel = require("./models/BookModel");

// 调用函数
db(
  () => {
    // console.log("连接成功...");
    //7. 新增
    BookModel.create({
      name: "西游记",
      author: "吴承恩",
      price: 19.9,
    })
      .then((data) => {
        console.log("新增成功...");
        console.log(data);
      })
      .catch((err) => {
        console.log("新增失败...");
        console.log(err);
      });
  },
  () => {
    console.log("连接失败...");
  }
);

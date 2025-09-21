//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require("mongoose");

//设置 strictQuery 为 true
mongoose.set("strictQuery", true);

//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect("mongodb://127.0.0.1:27017/bilibili");

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once("open", async () => {
  //5. 创建文档的结构对象
  //设置集合中文档的属性以及属性值的类型,类似 mysql 的表结构
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
  });

  //6. 创建模型对象  对文档操作的封装对象，类似 mysql 的表开始对这个表可以进行curd操作。model的参数：集合名称，集合结构
  // Mongoose 版本（8.18.1）已经不再支持回调函数的方式使用 create 方法。现在需要使用 Promise 或 async/await 的方式来处理。
  let BookModel = mongoose.model("books", BookSchema);

  //7. 新增 - 使用 Promise 的 .then 形式（注释掉原来的 async/await 版本）
  /*
  try {
    let data = await BookModel.create({
      name: "西游记",
      author: "吴承恩",
      price: 19.9,
    });
    //如果没有出错, 则输出插入后的文档对象
    console.log(data);
  } catch (err) {
    console.log(err);
  }
  */

  // 使用 Promise 的 .then 形式
  BookModel.create({
    name: "西游记",
    author: "吴承恩",
    price: 19.9,
  }).then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  });

  //8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
  // mongoose.disconnect();
});

// 设置连接错误的回调
mongoose.connection.on("error", () => {
  console.log("连接失败");
});

//设置连接关闭的回调
mongoose.connection.on("close", () => {
  console.log("连接关闭");
});

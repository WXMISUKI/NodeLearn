//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require("mongoose");

//设置 strictQuery 为 true
mongoose.set("strictQuery", true);

//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect("mongodb://127.0.0.1:27017/bilibili");

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once("open", () => {
  //5. 创建文档的结构对象
  //设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean,
    tags: Array,
    pub_time: Date,
    test: mongoose.Schema.Types.ObjectId, //ObjectId 文档 ID做外键（BSONError: input must be a 24 character hex string, 12 byte Uint8Array, or an integer）,mongoose.Schema.Types.Mixed，mixed类型相当于 mongodb 的所有类型，也就是前端的any类型
  });

  //6. 创建模型对象  对文档操作的封装对象
  let BookModel = mongoose.model("books", BookSchema);

  //7. 新增
  BookModel.create({
    name: "西游记",
    author: "吴承恩",
    price: 19.9,
    is_hot: true,
    tags: ["鬼怪", "励志", "社会"],
    pub_time: new Date(),
    test: new Date(),
  })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// 设置连接错误的回调
mongoose.connection.on("error", () => {
  console.log("连接失败");
});

//设置连接关闭的回调
mongoose.connection.on("close", () => {
  console.log("连接关闭");
});

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
    name: {
      type: String,
      required: true, // 表明该属性必须不为空
      unique: true, // 设置为独一无二的，但不同于主键，主键要求唯一且不能为空，而唯一索引要求唯一，但可以为空只要没写required
    },
    author: {
      type: String,
      default: "匿名",
    },
    //类型
    style: {
      type: String,
      //枚举
      enum: ["言情", "城市", "志怪", "恐怖"],
    },
    price: Number,
  });

  //6. 创建模型对象(集合collections，再命令行是哦通过db.createCollection('集合名称'))  对文档操作的封装对象
  let BookModel = mongoose.model("books", BookSchema);

  //7. 新增
  BookModel.create({
    name: "西游记",
    // author: '吴承恩',
    price: 19.9,
    style: "志怪",
  })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("插入失败");
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

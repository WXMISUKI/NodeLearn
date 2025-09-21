var express = require("express");
var router = express.Router();

//导入 moment
const moment = require("moment");
const AccountModel = require("../../models/AccountModel");

// 记账本列表
router.get("/", function (req, res, next) {
  res.redirect("/account");
});
router.get("/account", function (req, res, next) {
  //获取所有的账单信息
  // let accounts = db.get("accounts").value();
  AccountModel.find()
    .sort({ time: -1 })
    .exec()
    .then((accounts) => {
      console.log(accounts);

      res.json({
        // 响应码 20000或者0000
        code: "0000",
        // 响应数据
        data: accounts,
        // 响应消息
        msg: "读取成功",
      });
    })
    .catch((err) => {
      res.json({
        code: "1001",
        data: null,
        msg: "读取失败~",
      });
    });
});

// 新增记录
router.post("/account", function (req, res, next) {
  console.log("接收到的请求体数据:", req.body);

  // 检查必填字段
  if (!req.body.title || !req.body.time || !req.body.account) {
    console.log("缺少必要字段");
    return res.status(400).send("缺少必要字段: title, time, account");
  }

  // 获取请求体数据
  const accountData = {
    ...req.body,
    // 时间格式转换,将string 转成date
    time: moment(req.body.time).toDate(),
    // 确保金额是数字类型
    account: parseFloat(req.body.account),
    // 确保类型是数字类型
    type: parseInt(req.body.type),
  };

  console.log("处理后的数据:", accountData);

  AccountModel.create(accountData)
    .then((accountData) => {
      console.log("数据插入成功");
      res.json({
        code: "0000",
        msg: "添加成功~",
        data: accountData,
      });
    })
    .catch((err) => {
      console.error("插入数据失败:", err);
      res.json({
        code: "1002",
        msg: "创建数据失败: " + err.message,
        data: null,
      });
    });
});
//删除记录
router.delete("/account/:id", (req, res) => {
  //获取 params 的 id 参数
  let id = req.params.id;
  //删除
  AccountModel.deleteOne({ _id: id })
    .catch((err) => {
      console.error("删除失败:", err);
      res.json({
        code: "1003",
        msg: "删除失败: " + err.message,
        data: null,
      });
    })
    .then(() => {
      res.json({
        code: "0000",
        msg: "删除成功~",
        data: {},
      });
    });
});

// 获取单个账单信息
router.get("/account/:id", (req, res) => {
  let { id } = req.params;
  // 查询数据库
  AccountModel.findById(id)
    .then((data) => {
      res.json({
        code: "0000",
        msg: "读取成功",
        data: data,
      });
    })
    .catch((err) => {
      console.error("查询失败:", err);
      res.json({
        code: "1004",
        msg: "读取失败: " + err.message,
        data: null,
      });
    });
});

// 更新单个账单信息
router.patch("/account/:id", (req, res) => {
  let { id } = req.params;
  AccountModel.updateOne({ _id: id }, req.body)
    .then((data) => {
      AccountModel.findById(id).then((data) => {
        // 再次查询数据库
        res.json({
          code: "0000",
          msg: "更新成功",
          data: data,
        });
      });
    })
    .catch((err) => {
      res.json({
        code: "1005",
        msg: "更新失败: " + err.message,
        data: null,
      });
    });
});

module.exports = router;
